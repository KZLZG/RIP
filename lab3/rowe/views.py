from rest_framework import viewsets
from rowe.serializers import ProductSerializer, FabricantSerializer, UserSerializer, OrderSerializer
from rowe.models import Product, Order, User, Fabricant
from rest_framework.decorators import action
from datetime import datetime
from django.utils import timezone


class OrderViewSet(viewsets.ModelViewSet):
    # queryset = Order.objects.all()
    serializer_class = OrderSerializer

    @action(methods=['get'], detail=False)
    def get_queryset(self):
        print(self.request.query_params.dict())
        created = datetime.strptime(self.request.query_params.get('created'), '%Y-%m-%d')
        print(created)
        if not created:
            return Order.objects.all().order_by('created')[:4]
        return Order.objects.filter(created__day=created.day, created__month=created.month, created__year=created.year)


class FabricantViewSet(viewsets.ModelViewSet):

    # queryset всех пользователей для фильтрации по названиюv
    queryset = Fabricant.objects.all().order_by('name')
    serializer_class = FabricantSerializer  # Сериализатор для модели


class UserViewSet(viewsets.ModelViewSet):

    # queryset всех пользователей для фильтрации по названию
    queryset = User.objects.all().order_by('login')
    serializer_class = UserSerializer  # Сериализатор для модели


class ProductViewSet(viewsets.ModelViewSet):

    # queryset всех пользователей для фильтрации по названию
    queryset = Product.objects.all().order_by('name')
    serializer_class = ProductSerializer  # Сериализатор для модели




'''REQUESTS TO DB'''
# django.setup()
'''
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

orders_before_2022 = \
    Order.objects.filter(created__gte=datetime.datetime(2022, 11, 21, 11, 16, 34, tzinfo=datetime.timezone.utc),
                         created__lte=datetime.datetime(2022, 11, 30, 00, 00, 00, tzinfo=datetime.timezone.utc)).values()
# orders_before_2022 = Order.objects.all().values()
print(orders_before_2022)'''
#############################################

