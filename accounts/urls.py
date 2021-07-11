from django.urls import path
from . import views
from django.views.generic.base import RedirectView
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path("",RedirectView.as_view(url="index")),
    path("index/",views.index,name ="index"),
    path("login/", views.login_page, name="login"),
    path("signup/", views.signup, name="signup"),
    path("logout/", LogoutView.as_view(), name='logout'),
]