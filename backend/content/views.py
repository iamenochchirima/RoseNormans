from rest_framework.generics import ListAPIView
from .models import Project, Gallary
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import ProjectSerializer, GallarySerializer

class ProjectListAPIView(ListAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class GallaryListAPIView(ListAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Gallary.objects.all()
    serializer_class = GallarySerializer
