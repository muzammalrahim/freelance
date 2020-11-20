from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from acount import views as account_views

router = DefaultRouter()


# The API URLs are now determined automatically by the router.
urlpatterns = format_suffix_patterns([
	path('accounts/', include('rest_registration.api.urls')),
    url(r'^rest-auth/linkedin/$', account_views.LinkedinLogin.as_view(), name='linkedin_login'),
])



