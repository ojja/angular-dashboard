import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api';  // URL for reqres.in API
  private authTokenKey = 'authToken';
  private isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  // Check if the user has a token
  private hasToken(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  // Get the current login status as an observable
  get isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  // Login function to authenticate the user
  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };

    return this.http.post<{ token: string }>(url, body, { headers }).pipe(
      tap(response => {
        if (response.token) {
          this.setSession(response.token);
          this.isLoggedIn$.next(true);
        } else {
          throw new Error('Login failed');
        }
      }),
      catchError(error => {
        console.error('Login error', error);
        throw error;
      })
    );
  }

  // Set the token in local storage
  private setSession(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  // Logout the user
  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    this.isLoggedIn$.next(false);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.hasToken();
  }

  // Get the token if needed for making authenticated API requests
  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }
}
