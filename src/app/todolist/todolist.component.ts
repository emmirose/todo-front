import { Component } from '@angular/core';
import { TASKS } from "../mock-data";
import { Task } from '../Task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  constructor(private todoService: TodoService) { }

  tasks: Task[] = [];
  task!: Task;

  ngOnInit(): void {
  this.getTasks();
  }

  getTasks(): void {
    this.todoService.getTasks().subscribe(tasks => this.tasks = tasks);
    console.log("je suis dans getTasks");
  }

  addTask(task: Task): void {
    console.log(task);
    this.todoService.addTask(task).subscribe();
  }
}
