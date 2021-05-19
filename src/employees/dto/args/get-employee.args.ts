import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, isNotEmpty } from 'class-validator';

@ArgsType()
export class GetEmployeeArgs {
    @Field()
    @IsNotEmpty()
    employeeId: string;
}