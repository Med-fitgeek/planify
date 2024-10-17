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

  loadTodoItems() {
    const storedTodoItems = sessionStorage.getItem('guestTodoItems');
    if (storedTodoItems) {
      this.todoItems = JSON.parse(storedTodoItems);
    }
  }

  // Creer un new TodoItem et mettre a jour le sessionStorage
  createTodoItem() {
    if (this.newTodoItem.name && this.newTodoItem.date && this.newTodoItem.description) {
      this.newTodoItem.id = this.todoItems.length + 1; // definir l'ID
      this.todoItems.push(this.newTodoItem);
      this.updateStorage();
      this.resetNewTodoItem(); // reinitialiser le formulaire
      this.showForm = false;  // Cacher le formulaire après l'ajout
    }
  }

  // Supptimer un TodoItem et mettre a jour le sessionStorage
  deleteTodoItem(id: number) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== id);
    this.updateStorage();
  }

  // Mettre a jour le sessionStorage avec les TodoItems courants
  updateStorage() {
    sessionStorage.setItem('guestTodoItems', JSON.stringify(this.todoItems));
  }

  // Reinitialiser le nouveau TodoItem input fields
  resetNewTodoItem() {
    this.newTodoItem = { id: 0, name: '', status: 'planned', date: '', description: '' };
  }

  // Ouvrir TodoItem modal 
  openTodoItemModal(todoItem: TodoItem) {
    this.selectedTodoItem = todoItem;
  }

  // Fermer TodoItem modal 
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
