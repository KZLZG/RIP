from django.db import models

# Create your models here.
class Fabricant(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = 'fabricants'

class Tovar(models.Model):
    name = models.CharField(max_length=30)
    fabricant = models.ForeignKey(Fabricant, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = 'tovars'

class User(models.Model):
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    favourites = models.ManyToManyField(Tovar)

    class Meta:
        manged: True
        db_table = 'users'