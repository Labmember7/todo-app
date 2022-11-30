import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Todo } from '../todo'; 
@Injectable({
  providedIn:'root',
})
export class ApiHandlerService {
  
  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get<Todo[]>("http://127.0.0.1:8000/todo/")
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
 /** POST: add a new hero to the database */
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>("http://127.0.0.1:8000/todo/", todo)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTodo(id: number): Observable<unknown> {
    const url = `http://127.0.0.1:8000/todo/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
