from django.contrib import admin

from .models import Order, Fabricant, User, Product, Category

admin.site.register(Order)
admin.site.register(Fabricant)
admin.site.register(User)
admin.site.register(Product)
admin.site.register(Category)
