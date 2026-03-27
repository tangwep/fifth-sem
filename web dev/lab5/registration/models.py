from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=100) 
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    email = models.EmailField()

    def __str__(self):
        return self.username