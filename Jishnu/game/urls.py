from django.urls import path
from .views import HomeView,SaveView

urlpatterns = [
    path("" , HomeView ),
    path("save/<str:winner>", SaveView)
]