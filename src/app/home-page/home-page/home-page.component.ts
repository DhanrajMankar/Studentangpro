import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { StudentListComponent } from 'src/app/student-list/student-list/student-list.component';
import { Student } from 'src/app/student';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  student: Student[] = [];
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getStudent();
  }
  private getStudent(){
    this.studentService.getStudentList().subscribe(data => {
      this.student = data;
    });
  }
  getIdFormForUpdate(){
    this.router.navigate(['getIdUpdate']);
  }
  getIdFormForDelete(){
    this.router.navigate(['getIdDelete']);
  }
  DeleteAll(){
    this.studentService.deleteALLStudent().subscribe(data=> {
      console.log(data);
      this.getStudent();
    });
    alert("All Customers Deleted");
  }
  getAllStudentPage(){
    this.router.navigate(['student']);
  }
  AddStudentPage(){
    this.router.navigate(['createStudent']);
  }
  findByEmailForm(){
    this.router.navigate(['getEmail']);
  }
  findByIDForm(){
    this.router.navigate(['getID']);
  }

}
