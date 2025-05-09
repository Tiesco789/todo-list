import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTodoComponent } from './input-todo.component';

describe('InputTodoComponent', () => {
  let component: InputTodoComponent;
  let fixture: ComponentFixture<InputTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
