// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8222/api/auth/login';

  constructor(private http: HttpClient) { }

  login(): Observable<string> {
    return this.http.post(
      this.authUrl,
      { username: 'user', password: 'admin' },
      { responseType: 'text' }  // Force text response type
    ).pipe(
      map(token => token.trim()) // Clean up the response if needed
    );
  }
}