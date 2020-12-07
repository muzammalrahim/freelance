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

def safeDelete(self, request, ModelName, field='id'):
    instance = self.get_object()
    from datetime import datetime
    request_data = json.loads(request.body.decode('utf-8'))
    lookup = "{}__in".format(field)
    if 'ids' in request_data:
        ModelName.objects.filter(**{lookup : request_data['ids']}).update(
            deleted_at=datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        return Response(status=HTTP_204_NO_CONTENT)
    else:
        instance.deleted_at = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        instance.save()
        return Response(status=HTTP_204_NO_CONTENT)    
