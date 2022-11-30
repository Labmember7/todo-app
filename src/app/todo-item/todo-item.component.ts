import { Component, Input} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo("", false);
  
    done() {
    this.todo.isDone = !this.todo.isDone;
  }
}
