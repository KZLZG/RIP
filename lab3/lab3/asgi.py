import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'lab3.settings')

application = get_asgi_application()

import django
django.setup()
from rowe.models import Product

b = Product(name="testProd",
            id_fabricant_id=1,
            description="testestetas",
            in_stock=2, price=500
            )
b.save()
