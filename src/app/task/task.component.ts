import { Component, Input } from '@angular/core';
import { Task } from '../Task';
import { TodoService } from '../todo.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(private todoService: TodoService) { }

  updateTask(task: Task): void {
      this.todoService.updateTask(task).subscribe();
  }

  deleteTask(task: Task): void {
      this.todoService.deleteTask(task).subscribe();
  }

  updateIsDone(task: Task): void {
    this.todoService.updateisDone(task, !task.isDone).subscribe();
  }
}
