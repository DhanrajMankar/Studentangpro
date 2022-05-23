import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
@Component({
  selector: 'app-display-by-id',
  templateUrl: './display-by-id.component.html',
  styleUrls: ['./display-by-id.component.css']
})
export class DisplayByIdComponent implements OnInit {
  id!: number;
  student: Student = new Student();
  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) { 
    alert("constructor called...")
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    alert(this.id+" inside ngonint ")
    this.studentService.getStudentById(this.id).subscribe(data=>{
        this.student=data;
        alert(this.student.id+" "+this.student.email)
      },
      error => console.log(error)
    );
  }
}
