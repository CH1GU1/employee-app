import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpClient:HttpClient) { }

  saveEmployees(employees:Employee[]){
    this.httpClient.put('https://clients-app-d42f3-default-rtdb.firebaseio.com/employees.json',employees).subscribe(

    response=>console.log("Employees Saved! "+employees),
    error=> console.log("* Error * " + error),

    );
  }

  getEmployees(){
    return this.httpClient.get('https://clients-app-d42f3-default-rtdb.firebaseio.com/employees.json');
  }
}
