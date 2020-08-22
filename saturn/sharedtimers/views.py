from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("🖖🖖")

def test(request):
    return render(request,
        "sharedtimers/test.html", {"greeting": "🖖🖖"})


def join_room(request, room_code):
    return render(request,
        "sharedtimers/room.html", {"room_code": room_code})
