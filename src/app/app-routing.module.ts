import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student/create-student.component';
import { DisplayByEmailComponent } from './display-by-email/display-by-email/display-by-email.component';
import { DisplayByIdComponent } from './display-by-id/display-by-id/display-by-id.component';
import { GetEmailComponent } from './get-email/get-email/get-email.component';
import { GetIdDeleteComponent } from './get-id-delete/get-id-delete/get-id-delete.component';
import { GetIdFindComponent } from './get-id-find/get-id-find/get-id-find.component';
import { GetIdUpdateComponent } from './get-id-update/get-id-update/get-id-update.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { StudentListComponent } from './student-list/student-list/student-list.component'; 
import { UpdateStudentComponent } from './update-student/update-student/update-student.component';
const routes: Routes = [
  {path: 'student', component: StudentListComponent},
  {path: 'createStudent', component: CreateStudentComponent },
  {path: 'updateStudent/:id', component: UpdateStudentComponent},
  {path: 'homepage', component: HomePageComponent},
  {path: 'getIdUpdate', component: GetIdUpdateComponent},
  {path: 'getIdDelete', component: GetIdDeleteComponent},
  {path: 'getEmail', component: GetEmailComponent},
  {path: 'getID', component: GetIdFindComponent},
  {path: 'displayByID/:id', component: DisplayByIdComponent},
  {path: 'jumptoemail/:email', component: DisplayByEmailComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
