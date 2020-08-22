from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('test/', views.test, name="test"),
    path('<room_code>/', views.join_room, name='join_room')
]
