import { TasksService } from './tasks.service';
import { ChangeStatusDto, CreateTaskDto, UpdateTaskDto } from './dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<{
        tasks: number[];
    }>;
    findAll(): Promise<{
        tasks: any[] | any[];
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<{
        tasks: number;
    }>;
    remove(id: string): Promise<{
        tasks: number;
    }>;
    softDelete(id: string): Promise<{
        tasks: number;
    }>;
    updateStatus(id: string, changeStatusDto: ChangeStatusDto): Promise<{
        tasks: number;
    }>;
    tasksByStatus(): Promise<{
        tasks: any[];
    }>;
    search(query: string): Promise<{
        tasks: any[] | any[];
    }>;
    findOne(id: string): Promise<{
        tasks: any[] | any[];
    }>;
}
