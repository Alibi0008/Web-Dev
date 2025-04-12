# api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    # ЛР9: только GET
    path('companies/', views.CompanyListAPIView.as_view(), name='company-list'),
    path('companies/<int:id>/', views.CompanyDetailAPIView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesAPIView.as_view(), name='company-vacancies'),

    path('vacancies/', views.VacancyListAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>/', views.VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.TopTenVacanciesAPIView.as_view(), name='vacancy-top-ten'),

    # ЛР10: CRUD
    path('companies/create/', views.CompanyCreateAPIView.as_view(), name='company-create'),
    path('companies/<int:id>/update/', views.CompanyUpdateAPIView.as_view(), name='company-update'),
    path('companies/<int:id>/delete/', views.CompanyDeleteAPIView.as_view(), name='company-delete'),

    path('vacancies/create/', views.VacancyCreateAPIView.as_view(), name='vacancy-create'),
    path('vacancies/<int:id>/update/', views.VacancyUpdateAPIView.as_view(), name='vacancy-update'),
    path('vacancies/<int:id>/delete/', views.VacancyDeleteAPIView.as_view(), name='vacancy-delete'),
]
