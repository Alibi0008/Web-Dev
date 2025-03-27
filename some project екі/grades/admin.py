from django.contrib import admin
from .models import Student
# Register your models here.


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("name", "get_average_score", "get_top_score")