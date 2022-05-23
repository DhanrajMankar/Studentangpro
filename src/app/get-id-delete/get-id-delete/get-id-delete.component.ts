import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import {Router} from "@angular/router";
import { StudentService } from 'src/app/student.service';
@Component({
  selector: 'app-get-id-delete',
  templateUrl: './get-id-delete.component.html',
  styleUrls: ['./get-id-delete.component.css']
})
export class GetIdDeleteComponent implements OnInit {
  id!: number;
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
  onSubmit(){
    // confirm("Are you sure you?");
    if (confirm("Are you sure you?") == true) {
      this.studentService.deleteStudent(this.id).subscribe(data=> {
        console.log(data);
        this.getStudent();
      });
      alert("Student deleted Sucessfully");
      this.router.navigate(['homepage',]);
    } else {
      this.router.navigate(['homepage',]);
    }

  }

}
