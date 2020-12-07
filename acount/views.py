from rest_framework import viewsets

# Create your views here.
from rest_framework.response import Response
from allauth.socialaccount.providers.linkedin.views import LinkedInOAuthAdapter
from rest_auth.registration.views import SocialLoginView
# from rest_auth.social_serializers import LinkedinLoginSerializer
from acount import views as acount_view
from acount import serializers as acount_serializer


class LinkedinLogin(SocialLoginView):
    # serializer_class = LinkedinLoginSerializer
    adapter_class = LinkedInOAuthAdapter


class CityViewSet(viewsets.ModelViewSet):
    queryset = acount_view.City.objects.all()
    serializer_class = acount_serializer.CitySerilaizers
    search_fields = ['^name']


class SkillViewSet(viewsets.ModelViewSet):
    queryset = acount_view.Skill.objects.all()
    serializer_class = acount_serializer.SkillSerilaizers
    search_fields = ['^name']


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = acount_view.Category.objects.all()
    serializer_class = acount_serializer.CategorySerilaizers
    search_fields = ['^name']


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = acount_view.Question.objects.all()
    serializer_class = acount_serializer.QuestionSerilaizers
    search_fields = ['description']


class SpecialityViewSet(viewsets.ModelViewSet):
    queryset = acount_view.Speciality.objects.all()
    serializer_class = acount_serializer.SpecialitySerilaizers
    search_fields = ['^name']


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = acount_view.Profile.objects.all()
    serializer_class = acount_serializer.ProfileSerilaizers
    search_fields = ['user__first_name', 'user__last_name', 'user___email',
                     'user__username', 'account_title']
    filterset_fields = ['experience_level', 'zip_code', 'skills__name']


class ClientProfileViewSet(viewsets.ModelViewSet):
    queryset = acount_view.ClientProfile.objects.all()
    serializer_class = acount_serializer.ClientProfileSerilaizers
    search_fields = ['user__first_name', 'user__last_name', 'user___email',
                     'user__username', 'account_title']
    filterset_fields = ['experience_level', 'zip_code', 'skills__name']


class FreelancerProfileViewSet(viewsets.ModelViewSet):
    queryset = acount_view.FreelancerProfile.objects.all()
    serializer_class = acount_serializer.FreelancerProfileSerilaizers
    search_fields = ['user__first_name', 'user__last_name', 'user___email',
                     'user__username', 'account_title']
    filterset_fields = ['experience_level', 'zip_code', 'skills__name']
