from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.ProjectListAPIView.as_view(), name='project-list'),
    path('gallary/', views.GallaryListAPIView.as_view(), name='gallary-list'),
    path('articles/<slug:slug>/', views.ArticleDetailView.as_view(), name='article-detail'),
    path('articles/', views.ArticlesView.as_view(), name='special-articles-list'),
]