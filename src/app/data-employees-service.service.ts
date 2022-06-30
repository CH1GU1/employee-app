import { Injectable } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Employee } from './employee.model';
import { EmployeesServiceService } from './employees-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataEmployeesServiceService {

  constructor(private alertService:EmployeesServiceService, private dataService:DataServiceService) { 


  }
  employees:Employee[] = [];
/*
  employees:Employee[] = [

    new Employee("Kevin","Mera","Gerente",1000),
    new Employee("Camilo","Valencia","Subgerente",800),
    new Employee("Mariana","Ramirez","Directora",700),
    new Employee("Laura","Lopez","Administrativo",550)

  ];
  */

  setEmployees(myEmployees:Employee[]){
    this.employees = myEmployees;
  }

  addEmployeeService(toAdd:Employee){
    this.alertService.showMessage("Employee Information \nName: "+ toAdd.name + "\nLast Name: "+toAdd.lastName + "\nPay: "+toAdd.pay + "\nPosition: "+toAdd.position);
    this.employees.push(toAdd);

    this.dataService.saveEmployees(this.employees);
  }

  findEmployee(id:number){
    let employeeFound:Employee = this.employees[id];
    return employeeFound;
  }

  updateEmployee(id:number, empToUpdate:Employee){
    this.employees[id] = empToUpdate;
  }

  deleteEmployee(id:number){
    this.employees.splice(id,1); //Elimina el empleado
  }

  getEmployees(){
    return this.dataService.getEmployees();
  }
}
