import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'lab3.settings')

application = get_asgi_application()

'''REQUESTS TO DB'''
import django
django.setup()
from rowe.models import Product, User, Fabricant, Order

#############################################
# Creating a Product record
p = Product(
            name="testProd",
            id_fabricant_id=1,
            description="testestetas",
            in_stock=2,
            price=500
            )
p.save()


# Creating a Fabricant record
f = Fabricant(
            name="testFabr",
            description="tfabrbabs"
            )
f.save()


# Creating a User record
u = User(
            login="testProd",
            password="testestetas"
            )
u.save()


# Creating an Order record
user = User.objects.get(pk=1)
# car_oil = Product.objects.create(name="Create")
car_oil = Product.objects.get(pk=1)
user.orders.add(car_oil)
#############################################

#############################################
# change a Product record
product = Product.objects.get(pk=1)
product.id_fabricant = Fabricant.objects.get(pk=2)
product.save()


# change a Fabricant record
fabricant = Fabricant.objects.get(name="testFabr")
fabricant.description = "TOPPPP"
fabricant.save()


# change a User record
user = User.objects.get(name='user')
user.password = "user"
user.save()
############################################# 

#############################################
# select all Product records
all_prods = Product.objects.all()
# orders_before_2022 = Order.objects.filter(created__lte = '2022-01-01')
#############################################
