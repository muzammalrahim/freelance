from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from account.views import CityViewSet
from job.views import JobViewSet, AttachmentViewSet, OfferViewSet, InviteViewSet, ApplicationViewSet, ContractViewSet, \
	WorkViewSet, FeedbackViewSet, DisputViewSet

router = DefaultRouter()

job_list = JobViewSet.as_view({
	'get': 'list',
	'post': 'create'
})
attachment_list = AttachmentViewSet.as_view({
	'get': 'list',
	'post': 'create'
})
offer_list = OfferViewSet.as_view({
	'get': 'list',
	'post': 'create'
})

invite_list = InviteViewSet.as_view({
	'get': 'list',
	'post': 'create'
})
application_list = ApplicationViewSet.as_view({
	'get': 'list',
	'post': 'create'
})
contract_list = ContractViewSet.as_view({
	'get': 'list',
	'post': 'create'
})
work_list = WorkViewSet.as_view({
	'get': 'list',
	'post': 'create'
})
feedback_list = FeedbackViewSet.as_view({
	'get': 'list',
	'post': 'create'
})
disput_list = DisputViewSet.as_view({
	'get': 'list',
	'post': 'create'
})

city_list = CityViewSet.as_view({
	'get': 'list',
	'post': 'create'
})

# The API URLs are now determined automatically by the router.
urlpatterns = format_suffix_patterns([
	path('accounts/', include('rest_registration.api.urls')),
    path('job', job_list),
	path('attachment', attachment_list),
	path('offer', offer_list),
	path('invite', invite_list),
	path('application', application_list),
	path('contract', contract_list),
    path('work', work_list),
	path('feedback', feedback_list),
	path('disput', disput_list),

	path('city', city_list),


])



