import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataEmployeesServiceService {

  constructor() { }

  employees:Employee[] = [

    new Employee("Kevin","Mera","Gerente",1000),
    new Employee("Camilo","Valencia","Subgerente",800),
    new Employee("Mariana","Ramirez","Directora",700),
    new Employee("Laura","Lopez","Administrativo",550)

  ];
  
  addEmployeeService(toAdd:Employee){
    this.employees.push(toAdd);
  }
}
