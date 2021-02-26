from rest_registration.api.serializers import DefaultRegisterUserSerializer
from django.conf import settings
from acount import models
from rest_framework import serializers
from django.contrib.auth.models import Group


class CitySerializers(serializers.ModelSerializer):
    class Meta:
        model = models.City
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
    def to_representation(self, instance):
        representation = super(ProfileSerializers, self).to_representation(instance)

        representation['user'] = UserSerializer(instance.user).data

        representation['skills'] = SkillSerializers(instance.skills, many=True).data
        return representation

    def update(self, instance, validated_data):
        instance.updated_by = self.context['request'].user
        return super().update(instance, validated_data)

    def create(self, validated_data):
        validated_data['created_by'] = self.context['request'].user
        return super().update(validated_data)

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
    def to_representation(self, instance):
        representation = super(FreelancerProfileSerializers, self).to_representation(instance)

        representation['skills'] = SkillSerializers(instance.skills, many=True).data

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
