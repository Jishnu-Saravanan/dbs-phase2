from django.db import models
import datetime


# Create your models here.
class Win(models.Model):
    winner = models.CharField(max_length=1,null=False,blank=False)
    timestamp = models.DateTimeField(default=datetime.datetime.now,blank=False)

    def __str__(self):
        return self.winner + "won"
