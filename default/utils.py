from django.db.models import Q
from django.conf import settings

def isRoleFreelancer(obj):
    if obj and obj.groups.filter(name=settings.FREELANCER_USER).exists():
        return True
    else:
        return False


def isRoleClient(obj):
    if obj and obj.groups.filter(name=settings.CLIENT_USER).exists():
        return True
    else:
        return False

def isRoleAdmin(obj):
    if obj and obj.groups.filter(name=settings.ADMIN_USER).exists():
        return True
    else:
        return False