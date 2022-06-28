import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-features-c',
  templateUrl: './employee-features-c.component.html',
  styleUrls: ['./employee-features-c.component.css']
})
export class EmployeeFeaturesCComponent implements OnInit {

  @Output() employeesFeatures = new EventEmitter<string>(); //declaracion para la funcion Angular del hijo al padre

  constructor() { }

  ngOnInit(): void {
  }


  addFeatures(value: string) { //Metodo para enviar info del hijo al padre
    this.employeesFeatures.emit(value);
  }


}
