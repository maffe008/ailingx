from django.conf.urls import url
from tenihe import views

urlpatterns = [
    url(r'^tenihegis/$', views.tenihegis, name='tenihegis'),
    url(r'^tenihemap/(\d+)$', views.tenihemap, name='tenihemap'),
]