import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeChildCComponent } from './employee-child-c/employee-child-c.component';
import { EmployeeFeaturesCComponent } from './employee-features-c/employee-features-c.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
