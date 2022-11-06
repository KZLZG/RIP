from django.http import HttpResponse
from django.shortcuts import render
from datetime import date
from django.urls import reverse

dictit = [
            {'title': 'Масло моторное машинное', 'id': 1, 'description': 'Лучшее масло для машин'},
            {'title': 'Масло лодочное', 'id': 2, 'description': 'Лучшее масло для лодок'},
            {'title': 'Антифриз', 'id': 3, 'description': 'Лучший антифриз'},
        ]

def hello(request):
    return HttpResponse('Приложение для покупки моторных масел(ИУ5-52Б Козлов)')

def base(request):
    return render(request, 'base.html')

def index(request):
    return render(request, 'index.html', {'data': {
        'current_date': date.today(),
        'list': ['python', 'django', 'html']
    }})

def GetOrder(request, id):
    return render(request, 'order.html', {'data': {
        'current_date': date.today(),
        'id': id,
        'url': '/jpgs/'+str(id)+'.png',
    }})

def GetOrders(request):
    return render(request, 'orders.html', {'data': { 'orders' : dictit}})

from TOP_APP.models import Tovar

def tovarList(request):
    return render(request, 'tovars.html', {'data' : {
        'current_date': date.today(),
        'tovars': Tovar.objects.all()
    }})

def GetTovar(request, id):
    return render(request, 'tovar.html', {'data' : {
        'current_date': date.today(),
        'tovar': Tovar.objects.filter(id=id)[0]
    }})
