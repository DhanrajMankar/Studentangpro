import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list/student-list.component';
import { DisplayByEmailComponent } from './display-by-email/display-by-email/display-by-email.component';
import { DisplayByIdComponent } from './display-by-id/display-by-id/display-by-id.component';
import { GetEmailComponent } from './get-email/get-email/get-email.component';
import { GetIdDeleteComponent } from './get-id-delete/get-id-delete/get-id-delete.component';
import { GetIdFindComponent } from './get-id-find/get-id-find/get-id-find.component';
import { GetIdUpdateComponent } from './get-id-update/get-id-update/get-id-update.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { UpdateStudentComponent } from './update-student/update-student/update-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentListComponent,
    DisplayByEmailComponent,
    DisplayByIdComponent,
    GetEmailComponent,
    GetIdDeleteComponent,
    GetIdFindComponent,
    GetIdUpdateComponent,
    HomePageComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
