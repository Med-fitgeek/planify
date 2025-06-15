import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGuestComponent } from './todo-guest.component';

describe('TodoGuestComponent', () => {
  let component: TodoGuestComponent;
  let fixture: ComponentFixture<TodoGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoGuestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
