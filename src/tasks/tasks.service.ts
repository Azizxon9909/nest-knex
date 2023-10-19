import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { ChangeStatusDto, CreateTaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async findAll() {
    try {
      const tasks = await this.knex.table('tasks');
      return { tasks };
    } catch (error) {
      console.log(error);
    }
  }

  async create(createTaskDto: CreateTaskDto) {
    try {
      const tasks = await this.knex.table('tasks').insert(createTaskDto);

      return { tasks };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    const tasks = await this.knex.table('tasks').where('id', id);
    return { tasks };
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const tasks = await this.knex
        .table('tasks')
        .where('id', id)
        .update(updateTaskDto);

      return { tasks };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    const tasks = await this.knex.table('tasks').where('id', id).del();
    return { tasks };
  }

  async softDelete(id: number) {
    try {
      const tasks = await this.knex
        .table('tasks')
        .where('id', id)
        .update({ soft_delete: true });

      return { tasks };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async updateStatus(id: number, changeStatusDto: ChangeStatusDto) {
    try {
      const tasks = await this.knex
        .table('tasks')
        .where('id', id)
        .update({ status: changeStatusDto.status });

      return { tasks };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async tasksByStatus() {
    try {
      const tasks = await this.knex
        .table('tasks')
        .select('status')
        .count('id as count')
        .groupBy('status', 'id');
      console.log('tasks', tasks);

      return { tasks };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async search(query) {
    try {
      const tasks = await this.knex
        .table('tasks')
        .where('title', 'like', `%${query}%`);
      return { tasks };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}
