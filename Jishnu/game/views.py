from django.shortcuts import render,HttpResponse,HttpResponseRedirect
from .models import Win

# Create your views here.
def HomeView(request):
    return render(request,'game/index.html')

def SaveView(request,winner):
    w = Win(winner=winner)
    w.save()
    return render(request,'game/list.html',{
        "wins" : Win.objects.all()
    })