import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Chambre, TypeChambre } from '../model/chambre.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private apiUrl = 'http://localhost:8222/chambre';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private createAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllChambres(): Observable<Chambre[]> {
    return this.authService.login().pipe(
      switchMap(token => this.http.get<Chambre[]>(
        `${this.apiUrl}/retrieve-all-chambres`,
        { headers: this.createAuthHeaders(token) }
      ))
    );
  }

  getChambreById(id: number): Observable<Chambre> {
    return this.authService.login().pipe(
      switchMap(token => this.http.get<Chambre>(
        `${this.apiUrl}/retrieve-chambre/${id}`,
        { headers: this.createAuthHeaders(token) }
      ))
    );
  }

  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.authService.login().pipe(
      switchMap(token => this.http.post<Chambre>(
        `${this.apiUrl}/add-chambre`,
        chambre,
        { headers: this.createAuthHeaders(token) }
      ))
    );
  }

  updateChambre(chambre: Chambre): Observable<Chambre> {
    return this.authService.login().pipe(
      switchMap(token => this.http.put<Chambre>(
        `${this.apiUrl}/modify-chambre`,
        chambre,
        { headers: this.createAuthHeaders(token) }
      ))
    );
  }

  deleteChambre(id: number): Observable<void> {
    return this.authService.login().pipe(
      switchMap(token => this.http.delete<void>(
        `${this.apiUrl}/remove-chambre/${id}`,
        { headers: this.createAuthHeaders(token) }
      ))
    );
  }
}