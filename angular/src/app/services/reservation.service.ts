import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Reservation } from '../model/reservation.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8222/reservation';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private createAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.authService.login().pipe(
      switchMap(token => this.http.get<Reservation[]>(
        `${this.apiUrl}/retrieve-all-reservations`,
        { headers: this.createAuthHeaders(token) }
      ))
    );
  }

  getReservationById(id: string): Observable<Reservation> {
    return this.authService.login().pipe(
      switchMap(token => this.http.get<Reservation>(
        `${this.apiUrl}/retrieve-reservation/${id}`,
        { headers: this.createAuthHeaders(token) }
      ))
    );
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.authService.login().pipe(
      switchMap(token => this.http.post<Reservation>(
        `${this.apiUrl}/add-reservation`,
        reservation,
        { headers: this.createAuthHeaders(token) }
      ))
    );
  }

  updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.authService.login().pipe(
      switchMap(token => this.http.put<Reservation>(
        `${this.apiUrl}/modify-reservation`,
        reservation,
        { headers: this.createAuthHeaders(token) }
      ))
    );
  }

  deleteReservation(id: string): Observable<void> {
    return this.authService.login().pipe(
      switchMap(token => this.http.delete<void>(
        `${this.apiUrl}/remove-reservation/${id}`,
        { headers: this.createAuthHeaders(token) }
      ))
    );
  }
}