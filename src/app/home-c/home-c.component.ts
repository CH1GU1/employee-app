import { Component, OnInit } from '@angular/core';
import { DataEmployeesServiceService } from '../data-employees-service.service';
import { Employee } from '../employee.model';
import { EmployeesServiceService } from '../employees-service.service';

@Component({
  selector: 'app-home-c',
  templateUrl: './home-c.component.html',
  styleUrls: ['./home-c.component.css']
})
export class HomeCComponent implements OnInit {
  title = 'Employees List';

  nameBox:string="";
  lastNameBox:string="";
  positionBox:string="";
  payBox:number=0;
  employees:Employee[] = []; //Esto se debe dejar ya que hay un nfor que lo usa

  constructor(private empService:EmployeesServiceService, private dataEmpService:DataEmployeesServiceService) { 
    //this.employees = this.dataEmpService.employees; //Esto tambien se puede poner dentro de la interfaz onInit
  }

  ngOnInit(): void {
    this.employees = this.dataEmpService.employees;
  }

  addEmployee(){

    let myEmployee = new Employee(this.nameBox, this.lastNameBox, this.positionBox, this.payBox); //Recibir el empleado de los cuadros de texto
    //this.empService.showMessage("Employee Information \nName: "+ myEmployee.name + "\nLast Name: "+myEmployee.lastName + "\nPay: "+myEmployee.pay + "\nPosition: "+myEmployee.position);
    this.dataEmpService.addEmployeeService(myEmployee);
  }
  
}
