from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

<<<<<<< HEAD
User = get_user_model()

@admin.register(User)
class UserAdmin(UserAdmin):
    readonly_fields = ('date_joined',)
    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2')}
         ),
    )
    # fields when reading / updating an instance
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'phone', 'location', 'about_me', 'labels')}),
        ('Media', {'fields': ('avatar', 'banner')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        ('Groups', {'fields': ('groups',)}),
    )
    # fields which are shown when looking at a list of instances
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    ordering = ('email',)

=======
from django.contrib import admin


User = get_user_model()




admin.site.register(User, UserAdmin)
>>>>>>> da0044003cb653d9ba02d00ec640f6a247830209
