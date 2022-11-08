from rowe.models import Product
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Product
        # Поля, которые мы сериализуем
        fields = ["pk", "product_name", "price", "can_be_delivered", "in_stock"]
