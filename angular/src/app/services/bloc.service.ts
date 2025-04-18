import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Bloc } from '../model/bloc.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private apiUrl = 'http://localhost:8222/bloc';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private createAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllBlocs(): Observable<Bloc[]> {
    return this.authService.login().pipe(
      switchMap(token =>
        this.http.get<Bloc[]>(`${this.apiUrl}/retrieve-all-blocs`, {
          headers: this.createAuthHeaders(token)
        })
      )
    );
  }

  getBlocById(id: number): Observable<Bloc> {
    return this.authService.login().pipe(
      switchMap(token =>
        this.http.get<Bloc>(`${this.apiUrl}/retrieve-bloc/${id}`, {
          headers: this.createAuthHeaders(token)
        })
      )
    );
  }

  addBloc(bloc: Bloc): Observable<Bloc> {
    return this.authService.login().pipe(
      switchMap(token =>
        this.http.post<Bloc>(`${this.apiUrl}/add-bloc`, bloc, {
          headers: this.createAuthHeaders(token)
        })
      )
    );
  }

  updateBloc(bloc: Bloc): Observable<Bloc> {
    return this.authService.login().pipe(
      switchMap(token =>
        this.http.put<Bloc>(`${this.apiUrl}/modify-bloc`, bloc, {
          headers: this.createAuthHeaders(token)
        })
      )
    );
  }

  deleteBloc(id: number): Observable<void> {
    return this.authService.login().pipe(
      switchMap(token =>
        this.http.delete<void>(`${this.apiUrl}/remove-bloc/${id}`, {
          headers: this.createAuthHeaders(token)
        })
      )
    );
  }

  checkBlocExists(id: number): Observable<boolean> {
    return this.authService.login().pipe(
      switchMap(token =>
        this.http.get<boolean>(`${this.apiUrl}/exists/${id}`, {
          headers: this.createAuthHeaders(token)
        })
      )
    );
  }

  getBlocsWithoutFoyer(): Observable<Bloc[]> {
    return this.authService.login().pipe(
      switchMap(token =>
        this.http.get<Bloc[]>(`${this.apiUrl}/trouver-blocs-sans-foyer`, {
          headers: this.createAuthHeaders(token)
        })
      )
    );
  }

  getBlocsByNomAndCapacite(nb: string, c: number): Observable<Bloc[]> {
    return this.authService.login().pipe(
      switchMap(token =>
        this.http.get<Bloc[]>(`${this.apiUrl}/get-bloc-nb-c/${nb}/${c}`, {
          headers: this.createAuthHeaders(token)
        })
      )
    );
  }
}
