from rest_registration.api.serializers import DefaultRegisterUserSerializer, MetaObj
from django.contrib.auth import get_user_model
from rest_registration.utils.users import (
    get_user_field_names
)
from acount.models import Profile, City
from rest_framework import serializers


class CitySerilaizers(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

class CustomRegisterUserSerializer(DefaultRegisterUserSerializer):
    account_type = serializers.CharField(source='profile.account_type')
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
        profile = validated_data.pop('profile')
        user = super().create(validated_data)
        Profile(user=user, **profile).save()
        return user
