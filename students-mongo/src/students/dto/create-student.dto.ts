/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsOptional, IsNumber } from "class-validator";
export class CreateStudentDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsNumber()
    age: number;
    @IsOptional()
    available: boolean;
}