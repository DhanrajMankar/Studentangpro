import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-display-by-email',
  templateUrl: './display-by-email.component.html',
  styleUrls: ['./display-by-email.component.css']
})
export class DisplayByEmailComponent implements OnInit {
  email!: string; 
  student: Student = new Student();
  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) {
    alert("constructor called for email...")
   }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    alert("inside ngonint"+this.email)
    this.studentService.getStudentByEmail(this.email).subscribe(data=>{
        this.student=data;
        alert(this.student.id+" "+this.student.email+" for email")
      },
      error => console.log(error)
    );
  }
}