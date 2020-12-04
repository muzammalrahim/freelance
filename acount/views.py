from rest_framework import viewsets

# Create your views here.
from rest_framework.response import Response
from allauth.socialaccount.providers.linkedin.views import LinkedInOAuthAdapter
from rest_auth.registration.views import SocialLoginView
# from rest_auth.social_serializers import LinkedinLoginSerializer
from acount.models import City, Skill, Category, Profile
from acount.serializers import CitySerilaizers, SkillSerilaizers, \
    CategorySerilaizers, ProfileSerilaizers


class LinkedinLogin(SocialLoginView):
    # serializer_class = LinkedinLoginSerializer
    adapter_class = LinkedInOAuthAdapter


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerilaizers



class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerilaizers
    search_fields = ['^name']


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerilaizers
    search_fields = ['^name']


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerilaizers
    search_fields = ['user__first_name', 'user__last_name', 'user___email', 'user__username', 'account_title']
    filterset_fields = ['experience_level', 'zip_code', 'skills__name', 'category__name']