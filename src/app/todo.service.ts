import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private http: HttpClient ) { }
  private url = 'http://localhost:8080/tasks';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  addTask(task: Task): Observable<Task> {
    console.log(task);
    return this.http.post<Task>(this.url, task);

  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  updateisDone(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.http.delete<Task>(url);
  }

}
