from rest_framework import serializers
from job import models
from acount import serializers as acount_serializer
from acount import models as acount_models

from acount.serializers import SkillSerilaizers, CategorySerilaizers

class AttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Attachment
        fields = '__all__'


class JobSerializer(serializers.ModelSerializer):
  
    skills = acount_serializer.SkillSerializers(many=True, write_only=True)

    # def create(self, validated_data):
    #     job_skill = validated_data.pop('skills')
    #     print("job skill", job_skill)
    #     job = Job.objects.create(**validated_data)
    #     for data in job_skill:
    #         data['job'] = job
    #         Skill.objects.create(**validated_data)
    #     return job

    def create(self, validated_data):
        skills = validated_data.pop('skills')
        job = models.Job.objects.create(**validated_data)

        for skill in skills:
            s = acount_models.Skill.objects.create(name=skill.get('name'))
            job.skills.add(s)

        return job

    def to_representation(self, instance):
        representation = super(JobSerializer, self).to_representation(instance)
        # print("representation representation" , representation)
        related_models = ['category', 'skills']
        # print("related_modelsrelated_models ", related_models)
        # for model in related_models:
        #     try:
        #         representation[model] = utils.to_dict(getattr(instance, model))
        #         print("representation[model] representation[model]", representation[model])
        #     except:
        #         representation[model] = None
        try:
            representation['skills'] = acount_serializer.SkillSerializers(instance.skills, many=True).data
        except:
            representation['skills'] = None
        try:
            representation['category'] = acount_serializer.CategorySerializers(instance.category).data
        except:
            representation['category'] = None
        try:
            representation['client'] = acount_serializer.ClientProfileSerializers(instance.client).data
        except:
            representation['client'] = None
        return representation  
    class Meta:
        model = models.Job
        fields = '__all__'


class JobReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.JobReview
        fields = '__all__'


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Offer
        fields = '__all__'


class InviteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Invite
        fields = '__all__'


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Application
        fields = '__all__'


class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contract
        fields = '__all__'


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Work
        fields = '__all__'


class WorkChangesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.WorkChanges
        fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Feedback
        fields = '__all__'


class FeedbackReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FeedbackReview
        fields = '__all__'


class DisputSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Dispute
        fields = '__all__'
