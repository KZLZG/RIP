from django.contrib import admin

from .models import Order, Fabricant, User, Product

admin.site.register(Order)
admin.site.register(Fabricant)
admin.site.register(User)
admin.site.register(Product)


