import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  //TODO implement the methods to CRUD tasks
  // findAll(): Promise<Task[]> {
  //   // return the list of tasks from the database
  // }
}