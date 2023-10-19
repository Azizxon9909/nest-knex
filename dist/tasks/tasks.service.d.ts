import { Knex } from 'knex';
import { ChangeStatusDto, CreateTaskDto, UpdateTaskDto } from './dto';
export declare class TasksService {
    private readonly knex;
    constructor(knex: Knex);
    findAll(): Promise<{
        tasks: any[] | any[];
    }>;
    create(createTaskDto: CreateTaskDto): Promise<{
        tasks: number[];
    }>;
    findOne(id: number): Promise<{
        tasks: any[] | any[];
    }>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<{
        tasks: number;
    }>;
    remove(id: number): Promise<{
        tasks: number;
    }>;
    softDelete(id: number): Promise<{
        tasks: number;
    }>;
    updateStatus(id: number, changeStatusDto: ChangeStatusDto): Promise<{
        tasks: number;
    }>;
    tasksByStatus(): Promise<{
        tasks: any[];
    }>;
    search(query: any): Promise<{
        tasks: any[] | any[];
    }>;
}
