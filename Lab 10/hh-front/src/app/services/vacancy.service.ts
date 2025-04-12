import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy';
import {Company} from '../models/company';

@Injectable({ providedIn: 'root' })
export class VacancyService {
  private apiUrl = 'http://127.0.0.1:8000/api/vacancies/';

  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiUrl);
  }

  getTopTen(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}top_ten/`);
  }

  // src/app/services/company.service.ts

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}${id}/`);
  }

}

