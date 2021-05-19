import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetEmployeeArgs } from './dto/args/get-employee.args';
import { GetEmployeesArgs } from './dto/args/get-employees.args';
import { CreateEmployeeInput } from './dto/input/create-employee.input';
import { DeleteEmployeeInput } from './dto/input/delete-employee.input';
import { UpdateEmployeeInput } from './dto/input/update-employee.input';
import { EmployeesService } from './employees.service';
import { EmployeeModel } from './models/Employee.model';

@Resolver(() => EmployeeModel)
export class EmployeesResolver {

    constructor(private readonly employeeService: EmployeesService) { }

    @Query(() => EmployeeModel, { name: 'employee', nullable: true })
    getEmployee(@Args() getuserArgs: GetEmployeeArgs): EmployeeModel {
        return this.employeeService.getEmployee(getuserArgs);
    }

    @Query(() => [EmployeeModel], { name: 'employees', nullable: 'items' })
    getEmployees(@Args() getUsersArgs: GetEmployeesArgs): EmployeeModel[] {
        return this.employeeService.getEmployees(getUsersArgs);
    }

    @Mutation(() => EmployeeModel)
    createEmployee(@Args('createEmployeeData') createEmployeeData: CreateEmployeeInput): EmployeeModel {
        return this.employeeService.createEmployee(createEmployeeData);
    }

    @Mutation(() => EmployeeModel)
    updateEmployee(@Args('updateEmployeeData') updateEmployee: UpdateEmployeeInput): EmployeeModel {
        return this.employeeService.updateEmployee(updateEmployee);
    }

    @Mutation(() => EmployeeModel)
    deleteEmployee(@Args('deleteEmployee') deleteEmployee: DeleteEmployeeInput): EmployeeModel {
        return this.employeeService.deleteEmployee(deleteEmployee);
    }
}
