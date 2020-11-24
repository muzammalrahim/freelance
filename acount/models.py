from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class City(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='created_by_city')
    updated_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='updated_by_city')


class Skill(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='created_by_skill')
    updated_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='updated_by_skill')


class Category(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='created_by_category')
    updated_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='updated_by_category')


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    ACCOUNT_TYPE_CHOICES = (
        ('work', 'Work'),
        ('hire', 'Hire'),
    )
    account_type = models.CharField(choices=ACCOUNT_TYPE_CHOICES, max_length=4)
    account_title = models.CharField(max_length=70)
    description = models.TextField(max_length=5000)

    avatar = models.ImageField()

    VERIFICATION_STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
    )
    verification_status = models.CharField(choices=VERIFICATION_STATUS_CHOICES,
                                           max_length=10)

    LANG_CHOICES = (
        ('arabic', 'Arabic'),
        ('english', 'English'),
    )
    language = models.CharField(choices=LANG_CHOICES, max_length=30,
                                default='arabic')
    skills = models.ManyToManyField(Skill)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL,
                                 blank=True, null=True)
    city = models.ForeignKey(City, on_delete=models.SET_NULL, blank=True,
                             null=True)
    street = models.CharField(max_length=140)
    zip_code = models.CharField(max_length=14, blank=True, null=True)

    EXPERIENCE_LEVEL_CHOICES = (
        ('junior', 'Junior'),
        ('intermediate', 'Intermediate'),
        ('expert', 'Expert'),
    )
    experience_level = models.CharField(choices=EXPERIENCE_LEVEL_CHOICES,
                                        max_length=12)
    positions = models.CharField(max_length=100)
    birth_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='created_by_profile')
    updated_by = models.ForeignKey(User, blank=True, null=True,
                                   on_delete=models.SET_NULL,
                                   related_name='updated_by_profile')
