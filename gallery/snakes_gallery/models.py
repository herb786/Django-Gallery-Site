# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

# This model shows information about snakes
class Snake(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(max_length=80)
    imageUrl = models.CharField(max_length=250)
    caption = models.CharField(max_length=250)

# This model shows information about my website
class AboutSite(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    title = models.CharField(max_length=80)
    author = models.CharField(max_length=80)
    email = models.CharField(max_length=80)