from django.urls import path
from .views import ProjectListAPIView, GallaryListAPIView

urlpatterns = [
    path('projects/', ProjectListAPIView.as_view(), name='project-list'),
    path('gallaries/', GallaryListAPIView.as_view(), name='gallary-list'),
]