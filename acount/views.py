from django.shortcuts import render

# Create your views here.
from allauth.socialaccount.providers.twitter.views import TwitterOAuthAdapter
from rest_auth.registration.views import SocialLoginView
# from rest_auth.social_serializers import LinkedinLoginSerializer
from rest_auth.views import LoginView

class LinkedinLogin(SocialLoginView):
    # serializer_class = LinkedinLoginSerializer
    adapter_class = TwitterOAuthAdapter