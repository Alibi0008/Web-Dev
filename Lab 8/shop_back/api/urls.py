from django.urls import path
from .views import (
    ProductListView, ProductDetailView,
    CategoryListView, CategoryDetailView,
    ProductsByCategoryView
)

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),                     # /api/products
    path('products/<int:id>/', ProductDetailView.as_view(), name='product-detail'),        # /api/products/<int:id>
    path('categories/', CategoryListView.as_view(), name='category-list'),                 # /api/categories
    path('categories/<int:id>/', CategoryDetailView.as_view(), name='category-detail'),    # /api/categories/<int:id>
    path('categories/<int:id>/products/', ProductsByCategoryView.as_view(), name='products-by-category'),
]
