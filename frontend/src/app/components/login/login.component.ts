import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentification.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;  // Ajout de la variable errorMessage

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login({ username, password }).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.errorMessage = null;  // Réinitialiser le message d'erreur si la connexion est réussie
          this.router.navigate(['/todos']);
        },
        (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';  // Définir le message d'erreur
        }
      );
    }
  }
}
