from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Product
from django.contrib.auth.models import User

# Create your views here.
def Home(request):
    # return HttpResponse("this is my website")

    products=Product.objects.all()
    print(products)
    context={
        'Product':products
    }
    # print(len(products))
    return render(request, 'SHOP/store.html',context)

def cart(request):
    # context = {}
    return render(request, 'SHOP/cart.html')

def checkout(request):
    context = {}
    return render(request, 'SHOP/checkout.html', context)

def Login_Page(request):
    context = {}
    return render(request, 'SHOP/login.html', context)

# def signup(request):
#     if request.method == 'POST':
#         firstname = request.POST['firstname']
#         lastname  = request.POST['lastname']
#         email     = request.POST['email']
#         password  = request.POST['password']
#
#     else:
#         return render(request, 'SHOP/signup.html')


#
# def Login_Page(request):
#     if request.method == 'POST':
#         email1 = request.POST['email']
#         password1 = request.POST['password']
#         x = auth.authenticate(email=email1, password=password1)
#         if x is None :
#             return redirect('login/')
#         else :
#             return redirect('home/')
#     return render(request, 'SHOP/login.html')
#
def signup(request):
    # return render(request, 'SHOP/signup.html')
    if (request.method =='POST'):
        username1 = request.POST['username']
        print("helo")
        firstname1 = request.POST['firstname']
        lastname1  = request.POST['lastname']
        email1    = request.POST['emailid']
        password1  = request.POST['password']
        x = User.objects.create_user(username=username1,
                                     first_name=firstname1,
                                     last_name=lastname1,
                                     email=email1,
                                     password=password1)
        x.save()
        print("user created")
        return render(request,'SHOP/store.html')
    else:
        return render(request,'SHOP/signup.html')