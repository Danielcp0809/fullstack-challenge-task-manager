import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // TODO: implement the endpoints to CRUD tasks
  // @Get()
  // getAll() {
  //   // implement your method here
  // }
}