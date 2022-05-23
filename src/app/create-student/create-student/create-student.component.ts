import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import {Router} from "@angular/router";
import { StudentService } from 'src/app/student.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  constructor(private studentService: StudentService, private router: Router) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required,Validators.maxLength(12)]),
    lname: new FormControl('',[Validators.required]),
    mobile:new FormControl('')
     });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  ngOnInit(): void {
  }

  saveCustomer(){
   this.studentService.createStudent(this.student).subscribe(data =>
      {
        console.log(data);
        this.getToCustomerList();
      },
    error => console.log(error)
   );

  }

  getToCustomerList(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    console.log(this.student);
    this.saveCustomer();
  }


}
