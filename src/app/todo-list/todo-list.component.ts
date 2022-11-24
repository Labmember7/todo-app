import { Component } from '@angular/core';
import { Todo } from '../todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = []
  addedTodoItem: string = "";
  
  addTodoItem() {
    if (this.addedTodoItem) {
      let td = new Todo(this.addedTodoItem, false);
      this.todos.push(td);
    }
  }

  done(id: number) {
    this.todos[id].iscompleted = !this.todos[id].iscompleted;
  }
  
  remove(id: number) {
    this.todos.splice(id, 1);
  }

}
