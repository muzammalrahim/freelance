from rest_framework import serializers

from account.models import City


class CitySerilaizers(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'