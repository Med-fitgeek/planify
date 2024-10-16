import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import routes from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser'; // Pour démarrer l'application

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-todo-app';

}

  bootstrapApplication(AppComponent, {
    providers:[
      provideRouter(routes)
    ]
  });

