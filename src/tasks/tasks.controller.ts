import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ChangeStatusDto, CreateTaskDto, UpdateTaskDto } from './dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('/api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }

  @Patch('softdelete/:id')
  softDelete(@Param('id') id: string) {
    return this.tasksService.softDelete(+id);
  }

  @Patch('status/:id')
  updateStatus(
    @Param('id') id: string,
    @Body() changeStatusDto: ChangeStatusDto,
  ) {
    return this.tasksService.updateStatus(+id, changeStatusDto);
  }

  @Get('group')
  tasksByStatus() {
    return this.tasksService.tasksByStatus();
  }

  @Get('search')
  @ApiQuery({
    name: 'query',
    required: false,
    type: String,
  })
  search(@Query('query') query: string) {
    console.log('query');

    return this.tasksService.search(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }
}
