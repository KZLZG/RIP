from django.db import models


# Create your models here.
class Fabricant(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255, default='Надежный поставщик')

    class Meta:
        managed = True
        db_table = 'fabricants'


class Product(models.Model):
    name = models.CharField(max_length=30)
    id_fabricant = models.ForeignKey(Fabricant, on_delete=models.CASCADE)
    description = models.CharField(max_length=255, default='Описание')
    in_stock = models.IntegerField(verbose_name="Количество на складе")
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Цена товара")

    class Meta:
        managed = True
        db_table = 'products'


class User(models.Model):
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    #  orders = models.ManyToManyField(Product)
    orders = models.ManyToManyField(Product, through='Order')

    class Meta:
        managed: True
        db_table = 'users'


class Order(models.Model):
    users = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ForeignKey(Product, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)


'''

class Fabricant(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)


class Product(models.Model):
    product_name = models.CharField(max_length=50, verbose_name="Название товара")
    price = models.DecimalField(max_digits=8, decimal_places=2, verbose_name="Цена товара")
    can_be_delivered = models.BooleanField(verbose_name="Доставляется ли?")
    in_stock = models.IntegerField(verbose_name="Количество на складе")
    #id_fabricant = models.ForeignKey(Fabricant, on_delete=models.CASCADE)


class User(models.Model):
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    #favourites = models.ManyToManyField(Product)


class Purchase(models.Model):
    producer = models.ForeignKey(Fabricant, on_delete=models.CASCADE)
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True, verbose_name="Когда совершена покупка");
'''
