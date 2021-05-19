import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/input/create-employee.input';
import { EmployeeModel } from './models/Employee.model';
import { v4 as uuidv4 } from 'uuid';
import { GetEmployeeArgs } from './dto/args/get-employee.args';
import { GetEmployeesArgs } from './dto/args/get-employees.args';
import { UpdateEmployeeInput } from './dto/input/update-employee.input';
import { DeleteEmployeeInput } from './dto/input/delete-employee.input';

@Injectable()
export class EmployeesService {

    private employees: EmployeeModel[] = [];

    public createEmployee(createEmployeeData: CreateEmployeeInput): EmployeeModel {
        const emp: EmployeeModel = {
            employeeId: uuidv4(),
            ...createEmployeeData
        }

        this.employees.push(emp);
        return emp;
    }

    public getEmployee(getEmployeeArgs: GetEmployeeArgs): EmployeeModel {
        return this.employees.find(emp => emp.employeeId === getEmployeeArgs.employeeId);
    }

    public getEmployees(getEmployeesArgs: GetEmployeesArgs): EmployeeModel[] {
        return getEmployeesArgs.employeeIds.map(
            employeeId => this.getEmployee({ employeeId: employeeId })
        )
    }

    public updateEmployee(updateEmployeeData: UpdateEmployeeInput): EmployeeModel {
        const employee = this.employees.find(
            emp => emp.employeeId === updateEmployeeData.employeeId
        );
        Object.assign(employee, updateEmployeeData);
        return employee;
    }

    public deleteEmployee(deleteEmployee: DeleteEmployeeInput): EmployeeModel {
        const empIndex = this.employees.findIndex(
            emp => emp.employeeId === deleteEmployee.employeeId
        );
        const employee = this.employees[empIndex];
        this.employees.splice(empIndex);
        return employee;
    }
}
