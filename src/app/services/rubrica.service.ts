import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddContattoDTO, AddContattoDTOConNumbers, Contatto } from '../models/contatto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RubricaService {
  private baseURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getContatti(): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(this.baseURL + "/contatti");
  }

  // addContatto(model: AddContattoDTOConNumbers): Observable<Contatto> {
  //   return this.http.post<Contatto>(this.baseURL + "/contatti", model);
  // }

  addContatto(model: AddContattoDTO): Observable<Contatto> {
    return this.http.post<Contatto>(this.baseURL + "/contatti", model);
  }

  getContattoById(id: number): Observable<Contatto> {
    return this.http.get<Contatto>(this.baseURL + "/contatti/" + id);
  }

  editContattoById(id: number, model: AddContattoDTO): Observable<Contatto> {
    return this.http.put<Contatto>(this.baseURL + "/contatti/" + id, model);
  }

  deleteContattoById(id: number): Observable<Contatto> {
    return this.http.delete<Contatto>(this.baseURL + "/contatti/" + id);
  }
}
