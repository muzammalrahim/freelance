from rest_framework import viewsets
from account.models import City
from account.serilaizers import CitySerilaizers


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerilaizers