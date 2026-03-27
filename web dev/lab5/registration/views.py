from django.shortcuts import render, redirect
from .forms import RegistrationForm
from .models import UserProfile

def register_view(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save() # Saves to Database!
            return redirect('register_url')
    else:
        form = RegistrationForm()

    users = UserProfile.objects.all() # Gets everyone from Database
    return render(request, 'register.html', {'form': form, 'users': users})