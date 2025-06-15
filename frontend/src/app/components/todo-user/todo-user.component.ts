import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from '../../services/task/task.service';
import { TodoItem } from '../../models/todoItem.model';

@Component({
  selector: 'app-todo-user',
  standalone: true,
  templateUrl: './todo-user.component.html',
  styleUrls: ['./todo-user.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class TodoUserComponent implements OnInit {
  todoItems: TodoItem[] = [];
  newTodoItem: TodoItem = { name: '', status: 'planned', date: new Date().toISOString().split('T')[0], description: '' };
  selectedTodoItem: TodoItem | null = null;
  showForm: boolean = false;  // Variable pour gérer l'affichage du formulaire

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTodoItems();
  }

  loadTodoItems(): void {
    this.taskService.getTodos().subscribe(todoItems => {
      this.todoItems = todoItems;
    });
  }

  createTodoItem(): void {
    if (this.newTodoItem.name && this.newTodoItem.status && this.newTodoItem.date && this.newTodoItem.description) {
      this.taskService.createTodoItem(this.newTodoItem).subscribe(TodoItem => {
        this.todoItems.push(TodoItem);
        this.newTodoItem = { name: '', status: 'planned', date: new Date().toISOString().split('T')[0], description: '' };  // Réinitialisation du formulaire
        this.showForm = false;  // Cacher le formulaire après l'ajout
      });
    }
  }

  deleteTodoItem(id: number | undefined): void {
    if (id === undefined) {
      console.error('TodoItem ID is undefined');
      return;
    }

    this.taskService.deleteTodoItem(id).subscribe(() => {
      this.loadTodoItems();
    });
  }

  openTodoItemModal(TodoItem: TodoItem): void {
    this.selectedTodoItem = { ...TodoItem };  // Crée une copie pour éditer
  }

  closeTodoItemModal(): void {
    this.selectedTodoItem = null;  // Efface la sélection
  }

  // Gère l'affichage du formulaire
  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  // Gère la fermeture du formulaire
  cancelForm(): void {
    this.showForm = false;
  }
}
