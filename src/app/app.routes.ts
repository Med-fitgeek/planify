import { Routes } from '@angular/router'; // Importer le type Routes
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { TodoGuestComponent } from './components/todo-guest/todo-guest.component';
import { TodoUserComponent } from './components/todo-user/todo-user.component';
import { AuthGuard } from './guards/auth.guard';

// Assurez-vous de déclarer que routes est de type Routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // "full" est correct ici
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todoGuest', component: TodoGuestComponent },
  { path: 'todos', component: TodoUserComponent, canActivate: [AuthGuard] },
];

export default routes; // Exporter par défaut
