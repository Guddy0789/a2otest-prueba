from django.db import models

# Create your models here.
class Exercise1(models.Model):
    chain = models.CharField(max_length=100000)

    def __str__(self):
        return self.chain