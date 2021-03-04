from rest_registration.api.serializers import DefaultRegisterUserSerializer
from django.conf import settings
from acount import models
from rest_framework import serializers
from django.contrib.auth.models import Group
import base64, six, uuid
from job.models import Attachment
from django.core.files.base import ContentFile


# from rest_framework.fields import Field
# import datetime
# from django.utils import timezone


# class TimeWithTimezoneField(Field):
#     default_error_messages = {
#         'invalid': 'Time has wrong format, expecting %H:%M:%S%z.',
#     }
#
#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#
#     def to_internal_value(self, value):
#         value_with_date = datetime.datetime.now().strftime('%Y-%m-%d') + ' ' + value
#         try:
#             parsed = datetime.datetime.strptime(value_with_date, '%Y-%m-%d %H:%M:%S%z')
#         except (ValueError, TypeError) as e:
#             pass
#         else:
#             return parsed
#         self.fail('invalid')
#
#     def to_representation(self, value):
#         if not value:
#             return None
#
#         if isinstance(value, str):
#             return value
#
#         return timezone.make_naive(value, timezone.utc).strftime("%H:%M:%S+00:00")


class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):

        if isinstance(data, six.string_types):
            if 'data:' in data and ';base64,' in data:
                header, data = data.split(';base64,')

            try:
                decoded_file = base64.b64decode(data)
                # print("decoded_file", decoded_file)
            except TypeError:
                self.fail('invalid_image')

            if 'data-orig' in header:
                fname, garbage = header.split(';data:')
                garbage_val, file_name = fname.split('data-orig:')
                complete_file_name = "thumb_%s" % (file_name)
            else:
                file_name = str(uuid.uuid4())[:12]  # 12 characters are more than enough.
                file_extension = self.get_file_extension(file_name, decoded_file)
                complete_file_name = "%s.%s" % (file_name, file_extension,)

            # file_name = str(uuid.uuid4())[:12]  # 12 characters are more than enough.
            # print("file_name file_name", file_name)
            # # Get the file name extension:
            # file_extension = self.get_file_extension(file_name, decoded_file)
            # print("file_extension file_extension", file_extension)

            complete_file_name = "%s.%s" % (file_name, file_extension,)
            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        # print("extensionextensionextensionextensionextension", extension)
        extension = "jpg" if extension == "jpeg" else extension
        # print("image extension ", extension)

        return extension

    def from_native(self, data):
        if isinstance(data, basestring) and data.startswith('data:image'):
            # base64 encoded image - decode
            format, imgstr = data.split(';base64,')  # format ~= data:image/X,
            ext = format.split('/')[-1]  # guess file extension

            data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)

        return super(Base64ImageField, self).from_native(data)


class CitySerializers(serializers.ModelSerializer):
    class Meta:
        model = models.City
        fields = '__all__'


class CountrySerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Country
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    # time_zone = TimeWithTimezoneField()

    class Meta:
        model = models.User
        fields = '__all__'
        # fields = ['id', 'username', 'first_name', 'last_name', 'email', 'time_zone']


class SkillSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Skill
        fields = '__all__'


class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'


class ProfileSerializers(serializers.ModelSerializer):
    avatar = Base64ImageField(required=False)

    def to_representation(self, instance):
        representation = super(ProfileSerializers, self).to_representation(instance)

        representation['user'] = UserSerializer(instance.user).data
        representation['city'] = CitySerializers(instance.city).data
        representation['country'] = CountrySerializers(instance.country).data
        representation['skills'] = SkillSerializers(instance.skills, many=True).data

        return representation

    def update(self, instance, validated_data):
        instance.updated_by = self.context['request'].user
        return super().update(instance, validated_data)

    def create(self, validated_data):
        validated_data['created_by'] = self.context['request'].user
        return super().create(validated_data)

    class Meta:
        model = models.Profile
        fields = '__all__'


class ClientProfileSerializers(serializers.ModelSerializer):
    def to_representation(self, instance):
        representation = super(ClientProfileSerializers, self).to_representation(instance)
        representation['skills'] = SkillSerializers(instance.skills, many=True).data
        try:
            representation['user'] = UserSerializer(instance.user).data
        except:
            representation['user'] = None

        return representation

    class Meta:
        model = models.ClientProfile
        fields = '__all__'


class FreelancerProfileSerializers(serializers.ModelSerializer):
    from job.serializers import AttachmentSerializer
    skills = SkillSerializers(many=True, write_only=True)
    category = CategorySerializers(many=True, write_only=True)
    city = CitySerializers()
    country = CountrySerializers()
    license = AttachmentSerializer(write_only=True)
    id_card = AttachmentSerializer(write_only=True)
    certification = AttachmentSerializer(write_only=True)
    user = UserSerializer()

    def create(self, validated_data):
        skills = validated_data.pop('skills')
        category = validated_data.pop('category')
        user = validated_data.pop('user')
        city = validated_data.pop('city')
        country = validated_data.pop('country')
        license = validated_data.pop('license')
        id_card = validated_data.pop('id_card')
        certification = validated_data.pop('certification')

        # user = models.User.objects.create(**user)
        user = models.User.objects.get(id=user)
        Attachment.objects.create(**license)
        Attachment.objects.create(**id_card)
        Attachment.objects.create(**certification)
        city = models.City.objects.create(**city)
        country = models.Country.objects.create(**country)

        freelance_profile = models.FreelancerProfile.objects.create(user=user, city=city, country=country,
                                                                    **validated_data)
        for data in skills:
            k = models.Skill.objects.create(name=data.get('name'))
            freelance_profile.skills.add(k)

        for data in category:
            s = models.Category.objects.create(name=data.get('name'))
            freelance_profile.category.add(s)

        return freelance_profile

    def to_representation(self, instance):
        representation = super(FreelancerProfileSerializers, self).to_representation(instance)

        representation['skills'] = SkillSerializers(instance.skills, many=True).data
        representation['category'] = CategorySerializers(instance.category, many=True).data
        representation['user'] = UserSerializer(instance.user).data
        representation['city'] = CitySerializers(instance.city).data
        representation['country'] = CountrySerializers(instance.country).data

        return representation

    class Meta:
        model = models.FreelancerProfile
        fields = '__all__'


class QuestionSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Question
        fields = '__all__'


class SpecialitySerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Speciality
        fields = '__all__'


class CustomRegisterUserSerializer(DefaultRegisterUserSerializer):
    ACCOUNT_TYPE_CHOICES = (
        ('work', 'Work'),
        ('hire', 'Hire'),
    )
    account_type = serializers.ChoiceField(choices=ACCOUNT_TYPE_CHOICES, required=False)
    """
    Default serializer used for user registration. It will use these:
    * User fields
    * :ref:`user-hidden-fields-setting` setting
    * :ref:`user-public-fields-setting` setting
    to automagically generate the required serializer fields.
    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.Meta.fields = self.Meta.fields + ('account_type',)

    def create(self, validated_data):
        if 'account_type' in validated_data:
            account_type = validated_data.pop('account_type')
        user = super().create(validated_data)
        # Profile(user=user).save()

        if 'account_type' in validated_data:
            if account_type == 'work':
                models.FreelancerProfile(user=user).save()
                user.groups.add(Group.objects.get(name=settings.FREELANCER_USER))
            elif account_type == 'hire':
                models.ClientProfile(user=user).save()
                user.groups.add(Group.objects.get(name=settings.CLIENT_USER))
            else:
                user.groups.add(Group.objects.get(name=settings.ADMIN_USER))

        return user
