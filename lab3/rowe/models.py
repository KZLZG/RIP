from django.db import models
import json

# Класс производителя товара
class Fabricant(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255, default='Надежный поставщик')

    class Meta:
        managed = True
        db_table = 'fabricants'


# Класс товара
class Product(models.Model):
    name = models.CharField(max_length=30)
    id_fabricant = models.ForeignKey(Fabricant, on_delete=models.CASCADE, default=1)
    description = models.CharField(max_length=255, default='Описание')
    in_stock = models.IntegerField(default=1, verbose_name="Количество на складе")
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Цена товара", default=500)

    class Meta:
        managed = True
        db_table = 'products'


# Класс пользователя сервиса, связанный многие ко многим к товарам с помощью класса помощника Order
class User(models.Model):
    login = models.CharField(max_length=50, verbose_name="Логин")
    password = models.CharField(max_length=50, verbose_name="Пароль")
    orders = models.ManyToManyField(Product, through='Order')

    class Meta:
        managed: True
        db_table = 'users'


# Класс помощник, представляющий таблицу заказов
class Order(models.Model):
    users = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="id пользователя")
    products = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name="id товара")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Когда создан")
    updated = models.DateTimeField(auto_now=True, verbose_name="Последнее изменение")
    status = models.CharField(max_length=16, verbose_name="Статус заказа", default='Создан')


    class Meta:
        managed: True
        db_table = 'orders'
