import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@ArgsType()
export class GetEmployeesArgs {
    @Field(() => [String])
    @IsArray()
    employeeIds: string[];
}