from rest_registration.api.serializers import DefaultRegisterUserSerializer
from django.conf import settings
from acount import models
from rest_framework import serializers
from django.contrib.auth.models import Group
import base64, six, uuid
from django.core.files.base import ContentFile


class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):

        if isinstance(data, six.string_types):
            if 'data:' in data and ';base64,' in data:
                header, data = data.split(';base64,')

            try:
                decoded_file = base64.b64decode(data)
                print("decoded_file", decoded_file)
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
        print("extensionextensionextensionextensionextension", extension)
        extension = "jpg" if extension == "jpeg" else extension
        print("image extension ", extension)

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
    class Meta:
        model = models.User
        # fields = '__all__'
        fields = ['id', 'username', 'first_name', 'last_name', 'email']


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
    skills = SkillSerializers(many=True, write_only=True)
    category = CategorySerializers(many=True, write_only=True)
    user = UserSerializer()

    def create(self, validated_data):
        skills = validated_data.pop('skills')
        category = validated_data.pop('category')
        user = validated_data.pop('user')

        user = models.User.objects.create(**user)

        freelance_profile = models.FreelancerProfile.objects.create(user=user, **validated_data)

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
    account_type = serializers.ChoiceField(choices=ACCOUNT_TYPE_CHOICES)
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
        account_type = validated_data.pop('account_type')
        user = super().create(validated_data)
        # Profile(user=user).save()

        if account_type == 'work':
            models.FreelancerProfile(user=user).save()
            user.groups.add(Group.objects.get(name=settings.FREELANCER_USER))
        elif account_type == 'hire':
            models.ClientProfile(user=user).save()
            user.groups.add(Group.objects.get(name=settings.CLIENT_USER))
        else:
            user.groups.add(Group.objects.get(name=settings.ADMIN_USER))

        return user
