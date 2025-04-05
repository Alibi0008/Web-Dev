from django.urls import path
from .views import (
    CompanyListCreateAPIView,
    CompanyRetrieveUpdateDestroyAPIView,
    VacancyListCreateAPIView,
    VacancyRetrieveUpdateDestroyAPIView, TopTenVacanciesAPIView,
)

urlpatterns = [
    # CRUD endpoints for Company
    path('companies/', CompanyListCreateAPIView.as_view(), name='company-list-create'),
    path('companies/<int:pk>/', CompanyRetrieveUpdateDestroyAPIView.as_view(), name='company-detail'),

    # CRUD endpoints for Vacancy (if needed)
    path('vacancies/', VacancyListCreateAPIView.as_view(), name='vacancy-list-create'),
    path('vacancies/<int:pk>/', VacancyRetrieveUpdateDestroyAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view(), name='vacancy-top-ten'),

]
