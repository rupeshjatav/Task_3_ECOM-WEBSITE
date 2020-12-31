from django.contrib import admin
from django.urls import path
# from . import views
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.Home,name="Homepage"),
    path('',views.Home,name="store"),
    path('cart/',views.cart,name="cart"),
    path('login/',views.Login_Page,name="login"),
    path('signup/',views.signup,name="signup"),

]