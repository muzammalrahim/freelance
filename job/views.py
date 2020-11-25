from rest_framework import viewsets

from job.models import Job, Attachment, Offer, Invite, Application, Contract, \
    Work, Feedback, Dispute, JobReview, FeedbackReview, WorkChanges
from job.serializers import JobSerializer, AttachmentSerializer, \
    OfferSerializer, InviteSerializer, \
    ApplicationSerializer, ContractSerializer, WorkSerializer, \
    FeedbackSerializer, DisputSerializer, FeedbackReviewSerializer, \
    JobReviewSerializer, WorkChangesSerializer


class JobViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class JobReviewViewSet(viewsets.ModelViewSet):
    queryset = JobReview.objects.all()
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
