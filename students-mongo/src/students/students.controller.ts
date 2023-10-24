/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, ValidationPipe} from "@nestjs/common";
import { StudentsService } from './students.service';
import { CreateStudentDto } from "./dto/create-student.dto";
import { Student } from "./schemas/student.schema";

@Controller('students')
export class StudentsController{
    constructor(private readonly studentsService: StudentsService){}

    @Post()
    async create(@Body(new ValidationPipe()) createStudentDto: CreateStudentDto){
        await this.studentsService.create(createStudentDto);
    }

    @Get()
    async findAll(): Promise<Student[]>{
        return this.studentsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Student>{
        return this.studentsService.findOne(id)
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.studentsService.delete(id);
    }
}