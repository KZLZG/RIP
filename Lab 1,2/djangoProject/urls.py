"""djangoProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from django.conf import settings
from TOP_APP import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('base/', views.base, name='base'),
    path('', views.GetOrders, name='GetOrders'),
    path('order/<int:id>/', views.GetOrder, name='order_url'),
    path('intro/', views.hello, name='hello'),
    path('index/', views.index, name='index'),
    path('2', views.tovarList),
    path('tovar/<int:id>/', views.GetTovar, name='tovar_url'),
    path('send_delete/<int:id>', views.send_delete, name='send_delete')
]