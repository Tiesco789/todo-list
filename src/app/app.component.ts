import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InputTodoComponent } from './input-todo/input-todo.component';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, InputTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
}
