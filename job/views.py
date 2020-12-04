from rest_framework.response import Response
from rest_framework import viewsets
from django.db.models import Q
from job.models import Job, Attachment, Offer, Invite, Application, Contract, \
    Work, Feedback, Dispute, JobReview, FeedbackReview, WorkChanges
from job.serializers import JobSerializer, AttachmentSerializer, \
    OfferSerializer, InviteSerializer, \
    ApplicationSerializer, ContractSerializer, WorkSerializer, \
    FeedbackSerializer, DisputSerializer, FeedbackReviewSerializer, \
    JobReviewSerializer, WorkChangesSerializer

from default.utils import isRoleFreelancer, isRoleClient


class JobViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    # def get_queryset(self):
    #     user = self.request.user
    #     return self.queryset.filter(client=user)

    # def list(self, request, *args, **kwargs):
    #     user = request.user
    #     print('user', user)
    #     queryset = self.queryset
    #     # queryset = queryset.filter(client=user)
    #     # if user is not None:
    #     #     queryset = queryset.exclude(name='client')
    #     # queryset = self.filter_queryset(queryset)
    #     serializer = self.get_serializer(queryset)
    #     return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        print('user', request.user.id)
        queryset = self.filter_queryset(self.get_queryset())
        queryset = queryset.filter(client=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    #     if self.request.user.is_superuser:


class JobReviewViewSet(viewsets.ModelViewSet):
    queryset = JobReview.objects.filter(deleted_at=None)
    serializer_class = JobReviewSerializer


class AttachmentViewSet(viewsets.ModelViewSet):
    queryset = Attachment.objects.all()
    serializer_class = AttachmentSerializer


class OfferViewSet(viewsets.ModelViewSet):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer


class InviteViewSet(viewsets.ModelViewSet):
    queryset = Invite.objects.all()
    serializer_class = InviteSerializer


class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer


class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer

    def list(self, request, *args, **kwargs):
        user = request.user
        queryset = self.filter_queryset(self.get_queryset())
        if isRoleFreelancer(request.user):
            queryset = queryset.filter(freelancer=user)
        elif isRoleClient(request.user):
            queryset = queryset.filter(client=user)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer


class WorkChangesViewSet(viewsets.ModelViewSet):
    queryset = WorkChanges.objects.all()
    serializer_class = WorkChangesSerializer


class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer


class FeedbackReviewViewSet(viewsets.ModelViewSet):
    queryset = FeedbackReview.objects.all()
    serializer_class = FeedbackReviewSerializer


class DisputViewSet(viewsets.ModelViewSet):
    queryset = Dispute.objects.all()
    serializer_class = DisputSerializer
