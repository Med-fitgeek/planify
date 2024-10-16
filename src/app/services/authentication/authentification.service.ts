import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://localhost:5010/api/auth'; 

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user).pipe(
      tap((response: any) => {
        if (response && response.accessToken) {
          // Stocker le token dans le local storage ou session storage
          localStorage.setItem('token', response.accessToken);
        }
      })
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
  
    const payload = JSON.parse(atob(token.split('.')[1])); // Décoder le payload
    const expirationDate = new Date(payload.exp * 1000); // Convertir en millisecondes
  
    return expirationDate > new Date(); // Vérifier si le token n'est pas expiré
  }
  

  logout(): void {
    // Supprimer le token du local storage pour déconnecter l'utilisateur
    localStorage.removeItem('token');
  }
}
