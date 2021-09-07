from django.shortcuts import render

# Create your views here.

from .models import News
from .forms import NewsForm


def add_news(request):
    """Process images uploaded by users"""
    if request.method == 'POST':
        form = NewsForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            # Get the current instance object to display in the template
            img_obj = form.instance
            return render(request, 'index.html', {'form': form, 'img_obj': img_obj})
    else:
        form = NewsForm()
    return render(request, 'index.html', {'form': form})