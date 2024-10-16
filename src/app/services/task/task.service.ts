// src/app/services/Task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from '../../models/todoItem.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/TodoItem`; 

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.apiUrl);
  }

  createTodoItem(newTodoItem: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, newTodoItem);
  }

  updateTodoItem(updatedTodoItem: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(`${this.apiUrl}/${updatedTodoItem.id}`, updatedTodoItem);
  }

  deleteTodoItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
