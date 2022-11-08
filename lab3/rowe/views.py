from django.shortcuts import render
from rest_framework import viewsets
from rowe.serializers import ProductSerializer
from rowe.models import Product


class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по названию
    queryset = Product.objects.all().order_by('product_name')
    serializer_class = ProductSerializer  # Сериализатор для модели
