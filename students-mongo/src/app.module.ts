/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';

@Module({
  imports:[MongooseModule.forRoot('mongodb+srv://todosoporte:TodoSoporte2023@cluster0.no4p0bf.mongodb.net/?retryWrites=true&w=majority'),
StudentsModule,
],
})

export class AppModule {}
