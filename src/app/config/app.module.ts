import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { StudentComponent } from '../component/Student/student.component';

@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    StudentComponent
  ]
})
export class AppModule { }
