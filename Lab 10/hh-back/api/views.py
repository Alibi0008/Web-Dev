# api/views.py

from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# ЛР9: только GET

class CompanyListAPIView(generics.ListAPIView):
    """
    GET /api/companies/ — список всех компаний
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailAPIView(generics.RetrieveAPIView):
    """
    GET /api/companies/<int:id>/ — получение одной компании
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

class CompanyVacanciesAPIView(generics.ListAPIView):
    """
    GET /api/companies/<int:id>/vacancies/ — вакансии компании
    """
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)

class VacancyListAPIView(generics.ListAPIView):
    """
    GET /api/vacancies/ — список всех вакансий
    """
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailAPIView(generics.RetrieveAPIView):
    """
    GET /api/vacancies/<int:id>/ — получение одной вакансии
    """
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'

class TopTenVacanciesAPIView(generics.ListAPIView):
    """
    GET /api/vacancies/top_ten/ — топ-10 вакансий по убыванию зарплаты
    """
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]


# ЛР10: POST, PUT, DELETE

class CompanyCreateAPIView(generics.CreateAPIView):
    """
    POST /api/companies/ — создание компании
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyUpdateAPIView(generics.UpdateAPIView):
    """
    PUT /api/companies/<int:id>/ — обновление компании
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

class CompanyDeleteAPIView(generics.DestroyAPIView):
    """
    DELETE /api/companies/<int:id>/ — удаление компании
    """
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'id'

class VacancyCreateAPIView(generics.CreateAPIView):
    """
    POST /api/vacancies/ — создание вакансии
    """
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyUpdateAPIView(generics.UpdateAPIView):
    """
    PUT /api/vacancies/<int:id>/ — обновление вакансии
    """
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'

class VacancyDeleteAPIView(generics.DestroyAPIView):
    """
    DELETE /api/vacancies/<int:id>/ — удаление вакансии
    """
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_field = 'id'
