from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Attachment(models.Model):
    file = models.FileField()
    model = models.CharField(max_length=50)
    model_id = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class Job(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey("acount.Category", on_delete=models.SET_NULL, blank=True, null=True)

    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    )
    status = models.CharField(STATUS_CHOICES, max_length=10)

    client = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class Offer(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name='client_offer')
    freelancer = models.ForeignKey(User, on_delete=models.CASCADE)
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    )
    status = models.CharField(STATUS_CHOICES, max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class Invite(models.Model):
    cover_letter = models.TextField(max_length=5000)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name='client_invite')
    freelancer = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(max_length=5000)

    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    )
    status = models.CharField(STATUS_CHOICES, max_length=10)

    REJECT_REASON_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    )
    reject_reason = models.CharField(REJECT_REASON_CHOICES, max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class Application(models.Model):
    budget = models.DecimalField(max_digits=14, decimal_places=2)
    freelancer = models.ForeignKey(User, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True, null=True)
    client = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='client_application', blank=True,
                               null=True)
    description = models.TextField(max_length=500)

    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
    )
    status = models.CharField(STATUS_CHOICES, max_length=10)

    PROJECT_DURATION_CHOICES = (
        ('1-month', '1 Month'),
        ('3-months', '3 Months'),
    )
    project_duration = models.CharField(choices=PROJECT_DURATION_CHOICES, max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class Contract(models.Model):
    freelancer = models.ForeignKey(User, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True, null=True)
    client = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='client_contract', blank=True, null=True)

    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
    )
    status = models.CharField(STATUS_CHOICES, max_length=10)
    start_date = models.DateTimeField()
    project_budget = models.DecimalField(max_digits=14, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class Work(models.Model):
    freelancer = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True, null=True)
    client = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='client_work', blank=True, null=True)
    contract = models.ForeignKey(Contract, on_delete=models.SET_NULL, blank=True, null=True)
    description = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class Feedback(models.Model):
    freelancer = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True, null=True)
    client = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='client_feedback', blank=True, null=True)
    contract = models.ForeignKey(Contract, on_delete=models.SET_NULL, blank=True, null=True)
    description = models.TextField(max_length=500)
    rate = models.IntegerField()

    STATUS_CHOICES = (
        ('published', 'Published'),
    )
    status = models.CharField(STATUS_CHOICES, max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class Dispute(models.Model):
    freelancer = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    job = models.ForeignKey(Job, on_delete=models.SET_NULL, blank=True, null=True)
    client = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='client_dispute', blank=True, null=True)
    contract = models.ForeignKey(Contract, on_delete=models.SET_NULL, blank=True, null=True)
    description = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
