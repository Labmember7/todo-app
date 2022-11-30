import { Component } from '@angular/core';
import { Todo } from '../todo';
import { ApiHandlerService } from '../Services/api-handler.service';
@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = []
  addedTodoItem: string = "";
  data?: any = [];
  error: any;

  constructor(private apiHandler:ApiHandlerService) { };
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.apiHandler.getData()
      .subscribe({
        next: (data) => {
          this.data = { ...data };
          console.log(this.data);
          this.todos = data;
      }, // success path
        error: error => this.error = error, // error path
      });
  }
  addItem(newItem: Todo) {
      newItem.id = Date.now()%1e6
      this.apiHandler.addTodo(newItem)
      .subscribe(todo => this.todos.push(todo));    
    }
  
  remove(id: number) {
    this.apiHandler
      .deleteTodo(this.todos[id].id)
      .subscribe({
        next: (data) => {
          this.todos.splice(id, 1);
          console.log(data);
        }
      });
    
    

  }

}