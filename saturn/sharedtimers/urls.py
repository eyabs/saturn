from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('test/', views.test, name="test"),
    path('<room_code>/', views.join_room, name='join_room')
]
