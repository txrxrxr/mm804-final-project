'''
Set up Django model for the database.
It contains the essential fields and behaviors of the data. 
Generally, each model maps to a single database table.
'''

from django.db import models

class Ranking(models.Model):
    id = models.AutoField(primary_key=True)
    yearRange = models.CharField(max_length=500)
    location = models.CharField(max_length=500)
    type = models.CharField(max_length=500)
    total_number = models.FloatField()

    class Meta:
        verbose_name = "Ranking"
        db_table = "Ranking"
