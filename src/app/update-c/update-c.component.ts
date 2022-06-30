import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataEmployeesServiceService } from '../data-employees-service.service';
import { Employee } from '../employee.model';
import { EmployeesServiceService } from '../employees-service.service';

@Component({
  selector: 'app-update-c',
  templateUrl: './update-c.component.html',
  styleUrls: ['./update-c.component.css']
})
export class UpdateCComponent implements OnInit {

  nameBox:string="";
  lastNameBox:string="";
  positionBox:string="";
  payBox:number=0;
  employees:Employee[] = []; //Esto se debe dejar ya que hay un nfor que lo usa

  index:number;
  action:number;
  
  constructor(private router:Router, private route:ActivatedRoute,private empService:EmployeesServiceService, private dataEmpService:DataEmployeesServiceService) { }

  ngOnInit(): void {
    this.employees = this.dataEmpService.employees;
    this.index = this.route.snapshot.params['id'];

    let employee:Employee = this.dataEmpService.findEmployee(this.index);

    this.nameBox = employee.name;
    this.lastNameBox = employee.lastName;
    this.payBox = employee.pay;
    this.positionBox = employee.position;

    this.action = parseInt(this.route.snapshot.queryParams['action']);
  }


  returnHome(){  
    this.router.navigate(['']);
  }
/*
  updateEmployee(){

    let myEmployee = new Employee(this.nameBox, this.lastNameBox, this.positionBox, this.payBox); //Recibir el empleado de los cuadros de texto
    //this.empService.showMessage("Employee Information \nName: "+ myEmployee.name + "\nLast Name: "+myEmployee.lastName + "\nPay: "+myEmployee.pay + "\nPosition: "+myEmployee.position);
    this.dataEmpService.updateEmployee(this.index, myEmployee);
    this.returnHome();
  }

  deleteEmployee(){
    this.dataEmpService.deleteEmployee(this.index);
    this.returnHome();
  }
*/

updateEmployee(){

  switch (this.action) {
    case 1:
      let myEmployee = new Employee(this.nameBox, this.lastNameBox, this.positionBox, this.payBox); //Recibir el empleado de los cuadros de texto
      //this.empService.showMessage("Employee Information \nName: "+ myEmployee.name + "\nLast Name: "+myEmployee.lastName + "\nPay: "+myEmployee.pay + "\nPosition: "+myEmployee.position);
      this.dataEmpService.updateEmployee(this.index, myEmployee);
      this.returnHome();

      break;
    case 2:
      this.dataEmpService.deleteEmployee(this.index);
      this.returnHome();

      break;
    default:
      break;
  }

}

}
