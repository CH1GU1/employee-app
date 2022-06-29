import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataEmployeesServiceService } from '../data-employees-service.service';
import { Employee } from '../employee.model';
import { EmployeesServiceService } from '../employees-service.service';

@Component({
  selector: 'app-projects-c',
  templateUrl: './projects-c.component.html',
  styleUrls: ['./projects-c.component.css']
})
export class ProjectsCComponent implements OnInit {

  nameBox:string="";
  lastNameBox:string="";
  positionBox:string="";
  payBox:number=0;
  employees:Employee[] = []; //Esto se debe dejar ya que hay un nfor que lo usa

  constructor(private router:Router, private empService:EmployeesServiceService, private dataEmpService:DataEmployeesServiceService) { }

  ngOnInit(): void {
  }

  returnHome(){
    this.employees = this.dataEmpService.employees;
    this.router.navigate(['']);
  }

  addEmployee(){

    let myEmployee = new Employee(this.nameBox, this.lastNameBox, this.positionBox, this.payBox); //Recibir el empleado de los cuadros de texto
    //this.empService.showMessage("Employee Information \nName: "+ myEmployee.name + "\nLast Name: "+myEmployee.lastName + "\nPay: "+myEmployee.pay + "\nPosition: "+myEmployee.position);
    this.dataEmpService.addEmployeeService(myEmployee);
    this.returnHome();
  }
  
}
