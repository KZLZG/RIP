from django.db import models


class Product(models.Model):
    product_name = models.CharField(max_length=50, verbose_name="Название товара")
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Цена товара")
    can_be_delivered = models.BooleanField(verbose_name="Доставляется ли?")
    in_stock = models.IntegerField(verbose_name="Количество на складе")
