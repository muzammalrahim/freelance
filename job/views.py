from rest_framework.response import Response
from rest_framework import viewsets

from job import models as job_view
from job import serializers as job_serializer

from default.utils import isRoleFreelancer, isRoleClient, safeDelete


class JobViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """
    queryset = job_view.Job.objects.filter(deleted_at=None)
    serializer_class = job_serializer.JobSerializer
    search_fields = ['title']

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        if isRoleClient(request.user):
            queryset = queryset.filter(client=request.user.profile)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.Job)
        return resp


class JobReviewViewSet(viewsets.ModelViewSet):
    queryset = job_view.JobReview.objects.filter(deleted_at=None)
    serializer_class = job_serializer.JobReviewSerializer

    def destroy(self, request, *args, **kwargs):
        resp = safeDelete(self, request, job_view.JobReview)
        return resp


class AttachmentViewSet(viewsets.ModelViewSet):
    queryset = job_view.Attachment.objects.all()
    serializer_class = job_serializer.AttachmentSerializer


class OfferViewSet(viewsets.ModelViewSet):
    queryset = job_view.Offer.objects.all()
    serializer_class = job_serializer.OfferSerializer
    search_fields = ['title', 'category', 'budget', 'job__title']


class InviteViewSet(viewsets.ModelViewSet):
    queryset = job_view.Invite.objects.all()
    serializer_class = job_serializer.InviteSerializer


class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = job_view.Application.objects.all()
    serializer_class = job_serializer.ApplicationSerializer
    search_fields = ['job__title']

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        if isRoleFreelancer(request.user):
            queryset = queryset.filter(freelancer=request.user.profile)
        elif isRoleClient(request.user):
            job_id = request.GET.get('job_id', None)
            if job_id is not None and job_view.objects.filter(
                    client=request.user.profile,
                    id=job_id).exists():
                queryset = queryset.filter(job_id=job_id)
            else:
                queryset = []
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ContractViewSet(viewsets.ModelViewSet):
    queryset = job_view.Contract.objects.all()
    serializer_class = job_serializer.ContractSerializer
    search_fields = ['job__title']

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        if isRoleFreelancer(request.user):
            queryset = queryset.filter(freelancer=request.user.profile)
        elif isRoleClient(request.user):
            queryset = queryset.filter(client=request.user.profile)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class WorkViewSet(viewsets.ModelViewSet):
    queryset = job_view.Work.objects.all()
    serializer_class = job_serializer.WorkSerializer


class WorkChangesViewSet(viewsets.ModelViewSet):
    queryset = job_view.WorkChanges.objects.all()
    serializer_class = job_serializer.WorkChangesSerializer


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = job_view.Feedback.objects.all()
    serializer_class = job_serializer.FeedbackSerializer


class FeedbackReviewViewSet(viewsets.ModelViewSet):
    queryset = job_view.FeedbackReview.objects.all()
    serializer_class = job_serializer.FeedbackReviewSerializer


class DisputViewSet(viewsets.ModelViewSet):
    queryset = job_view.Dispute.objects.all()
    serializer_class = job_serializer.DisputSerializer
