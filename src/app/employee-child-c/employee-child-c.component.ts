import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-child-c',
  templateUrl: './employee-child-c.component.html',
  styleUrls: ['./employee-child-c.component.css']
})
export class EmployeeChildCComponent implements OnInit {

  @Input() employeeList:Employee;
  @Input() index:number;

  constructor() { }

  ngOnInit(): void {
  }

  featuresArray = [''];

  addFeature(newFeature: string) {
    this.featuresArray.push(newFeature);
  }

}
