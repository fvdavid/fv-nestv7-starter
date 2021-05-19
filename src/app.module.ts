import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    GraphQLModule.forRoot({autoSchemaFile: true}),
    EmployeesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
