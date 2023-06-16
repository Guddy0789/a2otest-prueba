from django.urls import path, include
from rest_framework import routers
from apis import views

#api
router = routers.DefaultRouter()
from rest_framework.documentation import include_docs_urls
router.register(r'apis', views.Exercise1view,'apis')


urlpatterns = [
    path('backend/',include(router.urls)),
    path('docs/',include_docs_urls(title="TaskApi"))
]

