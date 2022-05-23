import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
   
    this.getStudent();
  }
  private getStudent(){
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }
  updateStudent(id: number){
    this.router.navigate(['updateCustomer',id]);
  }
  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(data=> {
      console.log(data);
      this.getStudent();
    });
  }
}
