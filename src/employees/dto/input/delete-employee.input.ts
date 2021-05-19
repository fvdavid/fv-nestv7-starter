import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteEmployeeInput {
    @Field()
    @IsNotEmpty()
    employeeId: string;
}