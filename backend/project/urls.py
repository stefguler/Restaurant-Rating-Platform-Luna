from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('user.urls')),
    path('api/restaurants/', include('restaurant.urls')),
    path('api/reviews/', include('review.urls')),
    path('api/review/comment/', include('comment.urls')),

    path('api/auth/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', views.TokenRefreshView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/verify/', views.TokenVerifyView.as_view(), name='token_obtain_pair'),
]
