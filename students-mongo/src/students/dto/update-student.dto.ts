/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsOptional, IsNumber } from "class-validator";
export class UpdateStudentDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    name: string;
    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    age: number;
    @IsOptional()
    available: boolean;
}