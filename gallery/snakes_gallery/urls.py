from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^api/info', views.showInfoAboutSite),
    url(r'^api/snakes', views.showSnakeList),
]