import { Component, Input } from '@angular/core';
import { Task } from '../Task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(private todoService: TodoService) { }

  updateTask(task: Task): void {
    console.log("je suis dans updateTask");
      this.todoService.updateTask(task).subscribe();
  }

  deleteTask(task: Task): void {
      this.todoService.deleteTask(task).subscribe();
  }

}
