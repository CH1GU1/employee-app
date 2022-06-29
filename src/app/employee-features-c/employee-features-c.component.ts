import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeesServiceService } from '../employees-service.service';

@Component({
  selector: 'app-employee-features-c',
  templateUrl: './employee-features-c.component.html',
  styleUrls: ['./employee-features-c.component.css']
})
export class EmployeeFeaturesCComponent implements OnInit {

  @Output() employeesFeatures = new EventEmitter<string>(); //declaracion para la funcion Angular del hijo al padre

  constructor(private empService:EmployeesServiceService) { }

  ngOnInit(): void {
  }


  addFeatures(value: string) { //Metodo para enviar info del hijo al padre
    this.empService.showMessage("Feature to add: "+value);
    this.employeesFeatures.emit(value);
  }


}
