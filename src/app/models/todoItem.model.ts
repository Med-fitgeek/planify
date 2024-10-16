// src/app/models/todo.model.ts

export interface TodoItem {
    id?: number; 
    name: string;
    status: 'planned' | 'completed'; // Example of using a union type for status
    date: string; // You can change this to Date type if you want to handle Date objects
    description?: string; // Optional description
  }
  