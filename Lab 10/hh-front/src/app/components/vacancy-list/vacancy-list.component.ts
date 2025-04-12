// src/app/components/vacancy-list/vacancy-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  standalone: false,
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  selectedCompany: Company | null = null;  // <— добавили

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    const companyId = Number(this.route.snapshot.paramMap.get('id'));

    // Загружаем данные компании
    this.companyService.getCompany(companyId).subscribe(company => {
      this.selectedCompany = company;
    });

    // Загружаем вакансии компании
    this.companyService.getVacanciesByCompany(companyId).subscribe(vacs => {
      this.vacancies = vacs;
    });
  }

  goBack(): void {
    this.router.navigate(['/companies']);
  }
}
