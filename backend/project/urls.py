from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/', include('user.urls')),
    path('backend/api/restaurants/', include('restaurant.urls')),
    path('backend/api/reviews/', include('review.urls')),
    path('backend/api/review/comment/', include('comment.urls')),

    path('backend/api/auth/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/auth/token/refresh/', views.TokenRefreshView.as_view(), name='token_obtain_pair'),
    path('backend/api/auth/token/verify/', views.TokenVerifyView.as_view(), name='token_obtain_pair'),
]
