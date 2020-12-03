from rest_registration.api.serializers import DefaultRegisterUserSerializer, \
    MetaObj
from django.contrib.auth import get_user_model
from rest_registration.utils.users import (
    get_user_field_names
)
import base64
from django.conf import settings

from acount.models import Profile, City, Skill, Category
from rest_framework import serializers
from django.contrib.auth.models import Group


class CitySerilaizers(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class SkillSerilaizers(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class CategorySerilaizers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProfileSerilaizers(serializers.ModelSerializer):
    base64_message = 'UHl0aG9uIGlzIGZ1bg=='
    base64_bytes = base64_message.encode('ascii')
    message_bytes = base64.b64decode(base64_bytes)
    message = message_bytes.decode('ascii')

    class Meta:
        model = Profile
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
        Profile(user=user).save()

        if account_type == 'work':
            user.groups.add(Group.objects.get(name=settings.FREELANCER_USER))
        else:
            user.groups.add(Group.objects.get(name=settings.CLIENT_USER))

        return user
