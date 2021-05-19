import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateEmployeeInput {
    @Field()
    @IsNotEmpty()
    employeeId: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsNotEmpty()
    age?: number;

    @Field({ nullable: true })
    @IsOptional()
    @IsNotEmpty()
    email?: string;

    @Field({ nullable: true })
    @IsOptional()
    isPermanent?: boolean;
}