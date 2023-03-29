from django.db import models
from django.utils import timezone
from ckeditor_uploader.fields import RichTextUploadingField 
from django_extensions.db.fields import AutoSlugField

def project_cover_image(self, filename):
    return 'project_cover_images/' + str(self.pk) + '/cover_image.png'

class Project(models.Model):
    cover_image = models.ImageField(upload_to=project_cover_image, blank=True)
    project_title = models.CharField(max_length=100)
    body = RichTextUploadingField(blank=True, null=True)
    time_held = models.CharField(blank=True, max_length=100)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.project_title

def gallary_image(self, filename):
    return 'gallary_images/' + str(self.pk) + '/cover_image.png'

class Gallary(models.Model):
    image = models.ImageField(upload_to=gallary_image, blank=True)
    caption = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

def article_image(self, filename):
    return 'articles_images/' + str(self.pk) + '/cover_image.png'

class Article(models.Model):
    cover_image = models.ImageField(upload_to=article_image, blank=True)
    title = models.CharField(max_length=100)
    content = RichTextUploadingField(blank=True, null=True)
    author = models.CharField(blank=True, max_length=100)
    slug = AutoSlugField(populate_from='title', unique=True)
    archived = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.title