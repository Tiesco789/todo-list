import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-input-todo',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule
  ],
  templateUrl: './input-todo.component.html',
  styleUrl: './input-todo.component.scss'
})
export class InputTodoComponent {
  todoText = '';
  todoList: { text: string, completed: boolean }[] = [];

  addTodo() {
    this.todoText = this.todoText.trim();
    if (this.todoText.length > 0) {
      this.todoList.push({ text: this.todoText, completed: false });
      this.todoText = '';
      localStorage.setItem('todos', JSON.stringify(this.todoList));
    }
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  editTodo(index: number) {
    const editedTodo = prompt('Editar título do TODO:', this.todoList[index].text);

    if (editedTodo !== null && editedTodo.trim().length > 0) {
      this.todoList[index].text = editedTodo.trim();
      localStorage.setItem('todos', JSON.stringify(this.todoList));
    }
  }

  ngOnInit() {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      this.todoList = JSON.parse(savedTodos);
    }

    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }
}
