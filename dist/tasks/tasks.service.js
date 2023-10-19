"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
const nest_knexjs_1 = require("nest-knexjs");
let TasksService = class TasksService {
    constructor(knex) {
        this.knex = knex;
    }
    async findAll() {
        try {
            const tasks = await this.knex.table('tasks');
            return { tasks };
        }
        catch (error) {
            console.log(error);
        }
    }
    async create(createTaskDto) {
        try {
            const tasks = await this.knex.table('tasks').insert(createTaskDto);
            return { tasks };
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        const tasks = await this.knex.table('tasks').where('id', id);
        return { tasks };
    }
    async update(id, updateTaskDto) {
        try {
            const tasks = await this.knex
                .table('tasks')
                .where('id', id)
                .update(updateTaskDto);
            return { tasks };
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        const tasks = await this.knex.table('tasks').where('id', id).del();
        return { tasks };
    }
    async softDelete(id) {
        try {
            const tasks = await this.knex
                .table('tasks')
                .where('id', id)
                .update({ soft_delete: true });
            return { tasks };
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateStatus(id, changeStatusDto) {
        try {
            const tasks = await this.knex
                .table('tasks')
                .where('id', id)
                .update({ status: changeStatusDto.status });
            return { tasks };
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
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
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async search(query) {
        try {
            const tasks = await this.knex
                .table('tasks')
                .where('title', 'like', `%${query}%`);
            return { tasks };
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nest_knexjs_1.InjectModel)()),
    __metadata("design:paramtypes", [Function])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map