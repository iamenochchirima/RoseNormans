from django.contrib import admin
from .models import Project, Gallary, Article

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'project_title', 'created_at')
    search_fields = ('project_title',)
    list_filter = ('created_at',)

@admin.register(Gallary)
class GallaryAdmin(admin.ModelAdmin):
    list_display = ('id', 'caption', 'created_at')
    search_fields = ('caption',)
    list_filter = ('created_at',)

@admin.register(Article)
class ArticleModelAdmin(admin.ModelAdmin):
    model = Article
    list_display = ('id', 'title','archived', 'author', 'created_at')
    list_filter = ('created_at',)
