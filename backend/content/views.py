from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Project, Gallary, Article
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import ProjectSerializer, GallarySerializer, ArticleSerializer
from rest_framework.pagination import PageNumberPagination

class ArticlesPagination(PageNumberPagination):
    page_size = 1
    page_size_query_param = 'page_size'
    max_page_size = 100
    
class ArticlesView(ListAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = ArticleSerializer
    pagination_class = ArticlesPagination

    def get_queryset(self):
        return Article.objects.filter(archived=False)
    
class ArticleDetailView(RetrieveAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    lookup_field = 'slug'

class ProjectListAPIView(ListAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class GallaryListAPIView(ListAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Gallary.objects.all()
    serializer_class = GallarySerializer
