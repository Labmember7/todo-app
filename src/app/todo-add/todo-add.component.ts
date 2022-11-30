import { Component,Output, EventEmitter} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  @Output() newItemEvent = new EventEmitter<Todo>();
  addedTodoItem: string = "";

  addNewItem() {
    if (this.addedTodoItem) {
      let td = new Todo(this.addedTodoItem, false);
      this.newItemEvent.emit(td);
      this.addedTodoItem = "";
    }
  }
}
