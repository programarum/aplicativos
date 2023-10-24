/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
    @Prop()
    name: string;
    @Prop()
    age: number;
    @Prop()
    available: boolean;
}
export const StudentSchema = SchemaFactory.createForClass(Student);