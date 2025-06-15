export interface TodoItem {
    id?: number; 
    name: string;
    status: 'planned' | 'completed'; 
    date: string; 
    description?: string; 
  }
  