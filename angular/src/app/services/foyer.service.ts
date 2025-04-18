// foyer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Foyer } from '../model/foyer.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://localhost:8222/foyer';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private createAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllFoyers(): Observable<Foyer[]> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.get<Foyer[]>(
          `${this.apiUrl}/retrieve-all-foyers`,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  getFoyerById(id: number): Observable<Foyer> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.get<Foyer>(
          `${this.apiUrl}/retrieve-foyer/${id}`,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.post<Foyer>(
          `${this.apiUrl}/add-foyer`,
          foyer,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.put<Foyer>(
          `${this.apiUrl}/modify-foyer`,
          foyer,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  deleteFoyer(id: number): Observable<void> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.delete<void>(
          `${this.apiUrl}/remove-foyer/${id}`,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }

  checkFoyerExists(id: number): Observable<boolean> {
    return this.authService.login().pipe(
      switchMap(token => {
        return this.http.get<boolean>(
          `${this.apiUrl}/exists/${id}`,
          { headers: this.createAuthHeaders(token) }
        );
      })
    );
  }
}