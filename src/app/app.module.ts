import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataEmployeesServiceService } from './data-employees-service.service';
import { EmployeeChildCComponent } from './employee-child-c/employee-child-c.component';
import { EmployeeFeaturesCComponent } from './employee-features-c/employee-features-c.component';
import { EmployeesServiceService } from './employees-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeChildCComponent,
    EmployeeFeaturesCComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [EmployeesServiceService, DataEmployeesServiceService], //Aqui van los servicios que se creen
  bootstrap: [AppComponent]
})
export class AppModule { }
