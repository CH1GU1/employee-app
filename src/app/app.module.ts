import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataEmployeesServiceService } from './data-employees-service.service';
import { EmployeeChildCComponent } from './employee-child-c/employee-child-c.component';
import { EmployeeFeaturesCComponent } from './employee-features-c/employee-features-c.component';
import { EmployeesServiceService } from './employees-service.service';
import { HomeCComponent } from './home-c/home-c.component';
import { ProjectsCComponent } from './projects-c/projects-c.component';
import { WhoareCComponent } from './whoare-c/whoare-c.component';
import { ContactCComponent } from './contact-c/contact-c.component';
import { RouterModule, Routes } from '@angular/router'; //Linea para importar el router module

const appRoutes:Routes=[
  {path:'', component:HomeCComponent}, 
  {path:'projects', component:ProjectsCComponent},
  {path:'whoare', component:WhoareCComponent},
  {path:'contact', component:ContactCComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeChildCComponent,
    EmployeeFeaturesCComponent,
    HomeCComponent,
    ProjectsCComponent,
    WhoareCComponent,
    ContactCComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes) //Aqui tambien va el router module;
  ],
  providers: [EmployeesServiceService, DataEmployeesServiceService], //Aqui van los servicios que se creen
  bootstrap: [AppComponent]
})
export class AppModule { }
