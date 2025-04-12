import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  standalone: false,
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(
    private companyService: CompanyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  viewVacancies(company: Company): void {
    this.router.navigate([`/companies/${company.id}/vacancies`]);
  }
}
