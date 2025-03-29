from rest_framework import generics
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# 1) /api/products
class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# 2) /api/products/<int:id>
class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # Переопределяем поле поиска (по умолчанию pk)
    lookup_field = 'id'
    lookup_url_kwarg = 'id'

# 3) /api/categories
class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# 4) /api/categories/<int:id>
class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'id'

# 5) /api/categories/<int:id>/products
class ProductsByCategoryView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['id']
        return Product.objects.filter(category_id=category_id)
