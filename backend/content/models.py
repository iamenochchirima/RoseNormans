from django.db import models
from django.utils import timezone

def project_cover_image(self, filename):
    return 'project_cover_images/' + str(self.pk) + '/cover_image.png'

class Project(models.Model):
    cover_image = models.ImageField(upload_to=project_cover_image, blank=True)
    project_title = models.CharField(max_length=100)
    body = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

def gallary_image(self, filename):
    return 'gallary_images/' + str(self.pk) + '/cover_image.png'

class Gallary(models.Model):
    image = models.ImageField(upload_to=gallary_image, blank=True)
    caption = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
