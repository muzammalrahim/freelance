from rest_framework import serializers

from job.models import Attachment, Job, Offer, Invite, Application, Contract, \
    Work, Feedback, Dispute, JobReview, FeedbackReview, WorkChanges

from acount.serializers import SkillSerilaizers, CategorySerilaizers

class AttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attachment
        fields = '__all__'


class JobSerializer(serializers.ModelSerializer):
    skills = SkillSerilaizers(many=True, write_only=True)
    def create(self, validated_data):
        skills = validated_data.pop('skills')
        job = Job.objects.create(**validated_data)
        for skill in skills:
            s = Skill.objects.create(name=skill.get('name'))
            job.skills.add(s)
        return job
    def to_representation(self, instance):
        representation = super(JobSerializer, self).to_representation(instance)
        try:
            representation['skills'] = SkillSerilaizers(instance.skills, many=True).data
        except:
            representation['skills'] = None
        try:
            representation['category'] = CategorySerilaizers(instance.category).data
        except:
            representation['category'] = None
        # try:
            # representation['client'] = ClientProfileSerilaizers(instance.client).data
        # except:
            # representation['client'] = None
        return representation    
    class Meta:
        model = Job
        fields = '__all__'


class JobReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobReview
        fields = '__all__'


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'


class InviteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invite
        fields = '__all__'


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'


class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = '__all__'


class WorkChangesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkChanges
        fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'


class FeedbackReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackReview
        fields = '__all__'


class DisputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dispute
        fields = '__all__'
