from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()


# The API URLs are now determined automatically by the router.
urlpatterns = format_suffix_patterns([
	path('accounts/', include('rest_registration.api.urls')),
])



