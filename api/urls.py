from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from acount import views as account_views, views

from acount.views import CategoryViewSet, \
    ProfileViewSet
from job.views import JobViewSet, AttachmentViewSet, OfferViewSet, \
    InviteViewSet, ApplicationViewSet, ContractViewSet, \
    WorkViewSet, FeedbackViewSet, DisputViewSet, JobReviewViewSet, \
    FeedbackReviewViewSet, WorkChangesViewSet

router = DefaultRouter()
router.register(r'city', views.CityViewSet)
router.register(r'skill', views.SkillViewSet)
# router.register(r'jobreview', views.JobReviewViewSet)
# router.register(r'feedbackreview', views.FeedbackReviewViewSet)
# router.register(r'workchanges', views.WorkChangesViewSet)

job_list = JobViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

job_review_list = JobReviewViewSet.as_view({
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
work_changes_list = WorkChangesViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

feedback_list = FeedbackViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
feedback_review_list = FeedbackReviewViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
disput_list = DisputViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

# city_list = CityViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })
# skill_list = SkillViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })
category_list = CategoryViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

profile_list = ProfileViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

# The API URLs are now determined automatically by the router.
urlpatterns = format_suffix_patterns([

    path('accounts/', include('rest_registration.api.urls')),
    url(r'^rest-auth/linkedin/$', account_views.LinkedinLogin.as_view(),
        name='linkedin_login'),
    path('job', job_list),
    path('job_review', job_review_list),
    path('attachment', attachment_list),
    path('offer', offer_list),
    path('invite', invite_list),
    path('application', application_list),
    path('contract', contract_list),
    path('work', work_list),
    path('workchanges', work_changes_list),
    path('feedback', feedback_list),
    path('feedback_review', feedback_review_list),
    path('disput', disput_list),

    # path('city', city_list),
    # path('skill', skill_list),
    path('category', category_list),
    path('profile', profile_list),

])
urlpatterns += [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),

]
