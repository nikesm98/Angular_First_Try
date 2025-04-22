import { Component, input } from '@angular/core';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-todos-item',
  imports: [],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.scss'
})
export class TodosItemComponent {
  todo = input.required<Todo>();
}
