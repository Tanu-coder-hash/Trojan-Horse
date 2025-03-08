from django.db import models

class SurrogateMother(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    location = models.CharField(max_length=100)
    health_status = models.CharField(max_length=100)
    preferences = models.TextField()

    def __str__(self):
        return self.name

class IntendedParent(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    location = models.CharField(max_length=100)
    preferences = models.TextField()

    def __str__(self):
        return self.name