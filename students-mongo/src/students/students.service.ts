/* eslint-disable prettier/prettier */
import { InjectModel } from "@nestjs/mongoose";
import { Student } from "./schemas/student.schema";
import { Model } from "mongoose";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentsService{
    constructor(@InjectModel(Student.name) private studentModel: Model<Student>){}

    async create(createStudentDto: CreateStudentDto): Promise<Student>{
        const createdStudent = await this.studentModel.create(createStudentDto);
        return createdStudent.save();
    }

    async findAll(): Promise<Student[]>{
        return this.studentModel.find().exec();
    }
    async findOne(id: string): Promise<Student>{
        return this.studentModel.findOne({_id: id}).exec();
    }

    async delete(id: string): Promise<Student>{
        const deletedStudent = await this.studentModel
            .findByIdAndRemove({_id: id})
            .exec();
            return deletedStudent
    }
}