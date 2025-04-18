// etudiant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Etudiant } from '../model/etudiant.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:8222/etudiant';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private createAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllEtudiants(): Observable<Etudiant[]> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.get<Etudiant[]>(
          `${this.apiUrl}/retrieve-all-etudiants`,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  getEtudiantById(id: number): Observable<Etudiant> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.get<Etudiant>(
          `${this.apiUrl}/retrieve-etudiant/${id}`,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  getEtudiantByCin(cin: number): Observable<Etudiant> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.get<Etudiant>(
          `${this.apiUrl}/retrieve-etudiant-cin/${cin}`,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.post<Etudiant>(
          `${this.apiUrl}/add-etudiant`,
          etudiant,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.put<Etudiant>(
          `${this.apiUrl}/modify-etudiant`,
          etudiant,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  deleteEtudiant(id: number): Observable<void> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.delete<void>(
          `${this.apiUrl}/remove-etudiant/${id}`,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }
}