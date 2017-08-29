# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Snake, AboutSite
from django.http import HttpResponse
from django.core import serializers

# Create your views here.

def index(request):
    return HttpResponse("Welcome to My Snake Gallery.")

def showSnakeList(request):
    snake1 = Snake(
        id=1, 
        name='Python', 
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/3/32/Python_molurus_molurus_2.jpg',
        caption='Pythons are a family of nonvenomous snakes found in Africa, Asia, and Australia')
    snake2 = Snake(
        id=2,
        name='Viper', 
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/7/70/Crotalus-basiliscus-basiliskenklapperschlange.jpg',
        caption='Vipers are  a family of venomous snakes found in most parts of the world')
    snake3 = Snake(
        id=3,
        name='Boa', 
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/a/a7/Boa_constrictor_%282%29.jpg',
        caption='Boas are a family of nonvenomous snakes found in America, Africa, Madagascar, Europe, Asia, and some Pacific Islands.')
    data = serializers.serialize('json', [snake1, snake2, snake3])
    return HttpResponse(data)    
    

def showInfoAboutSite(request):
    info = AboutSite(id=1, title='Snake Gallery', author='Calvin Hobbes', email='calvin.hobbes@gmail.com')
    data = serializers.serialize('json', [info])
    return HttpResponse(data)
    
