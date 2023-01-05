from rowe.models import Product, Fabricant, Order, User, Category
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Product
        # Поля, которые мы сериализуем
        fields = ["pk", "name", "fabricant", "description", "in_stock", "price", "category", "img"]


class FabricantSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Fabricant
        # Поля, которые мы сериализуем
        fields = ["pk", "name", "description"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = User
        # Поля, которые мы сериализуем
        fields = ["pk", "login", "password"]


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Order
        # Поля, которые мы сериализуем
        fields = ["pk", "users", "products", "created", "updated", "status"]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Category
        # Поля, которые мы сериализуем
        fields = ["pk", "name"]
