import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees List';
  
  nameBox:string="";
  lastNameBox:string="";
  positionBox:string="";
  payBox:number=0;

  employees:Employee[] = [

    new Employee("Kevin","Mera","Gerente",1000),
    new Employee("Camilo","Valencia","Subgerente",800),
    new Employee("Mariana","Ramirez","Directora",700),
    new Employee("Laura","Lopez","Administrativo",550)

  ];

  addEmployee(){

    let myEmployee = new Employee(this.nameBox, this.lastNameBox, this.positionBox, this.payBox); //Recibir el empleado de los cuadros de texto
    this.employees.push(myEmployee);
  }



}
