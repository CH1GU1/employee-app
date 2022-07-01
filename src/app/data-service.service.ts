import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpClient:HttpClient) { }

  saveEmployees(employees:Employee[]){
    this.httpClient.put('https://clients-app-d42f3-default-rtdb.firebaseio.com/employees.json',employees).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('Employee Deleted!') 
    });
  }

  getEmployees(){
    return this.httpClient.get('https://clients-app-d42f3-default-rtdb.firebaseio.com/employees.json');
  }

  updateEmployee(index:number, empToUpdate:Employee){
    let url = 'https://clients-app-d42f3-default-rtdb.firebaseio.com/employees/'+index+'.json';
    this.httpClient.put(url,empToUpdate).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('Employee Updated!') 
    });
  }
  
  deleteEmployee(index:number){
    let url = 'https://clients-app-d42f3-default-rtdb.firebaseio.com/employees/'+index+'.json';
    this.httpClient.delete(url).subscribe({
      error: (e) => console.error(e),
      complete: () => console.info('Employee Deleted!') 
    });
  }

}
