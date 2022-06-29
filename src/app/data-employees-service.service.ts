import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeesServiceService } from './employees-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataEmployeesServiceService {

  constructor(private alertService:EmployeesServiceService) { 


  }

  employees:Employee[] = [

    new Employee("Kevin","Mera","Gerente",1000),
    new Employee("Camilo","Valencia","Subgerente",800),
    new Employee("Mariana","Ramirez","Directora",700),
    new Employee("Laura","Lopez","Administrativo",550)

  ];
  
  addEmployeeService(toAdd:Employee){
    this.alertService.showMessage("Employee Information \nName: "+ toAdd.name + "\nLast Name: "+toAdd.lastName + "\nPay: "+toAdd.pay + "\nPosition: "+toAdd.position);
    this.employees.push(toAdd);
  }
}
