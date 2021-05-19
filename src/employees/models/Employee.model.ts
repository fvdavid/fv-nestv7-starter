import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class EmployeeModel {
    @Field()
    employeeId: string;

    @Field()
    email: string;

    @Field(() => Int)
    age: number;

    @Field({ nullable: true })
    isPermanent?: boolean;
}