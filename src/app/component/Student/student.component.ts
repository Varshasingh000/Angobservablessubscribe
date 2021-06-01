import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title = 'student';
  students: Student[] = [];
  constructor(private studentService: StudentService) {}
  ngOnInit() {
    const studentObservable = this.studentService.getStudents();
    studentObservable.subscribe((studentsData: Student[]) => {
      this.students = studentsData
    });
  }
}
