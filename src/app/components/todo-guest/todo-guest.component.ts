import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TodoItem {
  id: number;
  name: string;
  status: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-todo-guest',
  standalone: true,
  templateUrl: './todo-guest.component.html',
  styleUrls: ['./todo-guest.component.css'],
  imports: [CommonModule, FormsModule]
})
export class TodoGuestComponent implements OnInit {
  todoItems: TodoItem[] = [];
  newTodoItem: TodoItem = { id: 0, name: '', status: 'planned', date: '', description: '' };
  selectedTodoItem: TodoItem | null = null;
  showForm: boolean = false;  

  constructor() {}

  ngOnInit() {
    this.loadTodoItems();
  }

  // Load TodoItems from sessionStorage
  loadTodoItems() {
    const storedTodoItems = sessionStorage.getItem('guestTodoItems');
    if (storedTodoItems) {
      this.todoItems = JSON.parse(storedTodoItems);
    }
  }

  // Create a new TodoItem and update sessionStorage
  createTodoItem() {
    if (this.newTodoItem.name && this.newTodoItem.date && this.newTodoItem.description) {
      this.newTodoItem.id = this.todoItems.length + 1; // Assign a simple ID
      this.todoItems.push(this.newTodoItem);
      this.updateStorage();
      this.resetNewTodoItem(); // Reset the form
      this.showForm = false;  // Cacher le formulaire après l'ajout
    }
  }

  // Delete a TodoItem and update sessionStorage
  deleteTodoItem(id: number) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== id);
    this.updateStorage();
  }

  // Update sessionStorage with current TodoItems
  updateStorage() {
    sessionStorage.setItem('guestTodoItems', JSON.stringify(this.todoItems));
  }

  // Reset the new TodoItem input fields
  resetNewTodoItem() {
    this.newTodoItem = { id: 0, name: '', status: 'planned', date: '', description: '' };
  }

  // Open TodoItem modal (optional)
  openTodoItemModal(todoItem: TodoItem) {
    this.selectedTodoItem = todoItem;
  }

  // Close TodoItem modal (optional)
  closeTodoItemModal() {
    this.selectedTodoItem = null;
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
