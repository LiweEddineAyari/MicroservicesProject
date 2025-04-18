// universite.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Universite } from '../model/universite.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiUrl = 'http://localhost:8222/api/universites';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private createAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllUniversites(): Observable<Universite[]> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.get<Universite[]>(
          this.apiUrl,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  getUniversiteById(id: string): Observable<Universite> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.get<Universite>(
          `${this.apiUrl}/${id}`,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  createUniversite(universite: Universite): Observable<Universite> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.post<Universite>(
          this.apiUrl,
          universite,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  updateUniversite(id: string, universite: Universite): Observable<Universite> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.put<Universite>(
          `${this.apiUrl}/${id}`,
          universite,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  deleteUniversite(id: string): Observable<void> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.delete<void>(
          `${this.apiUrl}/${id}`,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }
}