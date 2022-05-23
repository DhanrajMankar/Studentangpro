import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private getAllStudentsURL = "http://localhost:9999/api/v1/getAllStudents";
  private createStudentURL = "http://localhost:9999/api/v1/createStudent";
  private getStudentbyIdURL = "http://localhost:9999/api/v1/getStudent";
  private updateStudentURL = "http://localhost:9999/api/v1/updateStudent";
  private deleteStudentURL = "http://localhost:9999/api/v1/deleteStudent";
  private deleteAllStudentURL = "http://localhost:9999/api/v1/deleteAllStudent";
  private getStudentbyEmailURL = "http://localhost:9999/api/v1/findByEmail";


  constructor(private HttpClient: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.HttpClient.get<Student[]>(`${this.getAllStudentsURL}`);
 }
 createStudent(student: Student): Observable<Object>{
   return this.HttpClient.post(`${this.createStudentURL}`, student);
 }
 updateStudent(id: number, student:Student): Observable<Object>{
   return this.HttpClient.put(`${this.updateStudentURL}/${id}`,student);
 }
 deleteStudent(id: number): Observable<Object>{
   return this.HttpClient.delete(`${this.deleteStudentURL}/${id}`);
 }
 deleteALLStudent(): Observable<Object>{
     return this.HttpClient.delete(`${this.deleteAllStudentURL}`);
 }
 getStudentById(id: number): Observable<Student> {
   alert('hi')
   return this.HttpClient.get<Student>(`${this.getStudentbyIdURL}/${id}`);
 }
 getStudentByEmail(email: string): Observable<Student> {
   alert('.....hiiiii from service layer......'+ email);
   
   return this.HttpClient.get<Student>(`${this.getStudentbyEmailURL}/${email}`);
 }
}



