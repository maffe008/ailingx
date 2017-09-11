from django.conf.urls import url
from demo import views

urlpatterns = [
    url(r'^demogis/$', views.demogis, name='demogis'),
    url(r'^demomap/(\d+)$', views.demomap, name='demomap'),
]