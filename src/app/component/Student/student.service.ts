import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: "root"
})

export class StudentService {
    students: Student[] = [
        {
            stuId: 1,
            stuName: 'Antonio',
            stuEmail: 'antonio12@gmail.com',
            stuRollNo: 101,
            stuCollege: 'JNU Delhi',
            stuUniversity: 'GGI Delhi'
        },
        {
            stuId: 2,
            stuName: 'Naina',
            stuEmail: 'naina12@gmail.com',
            stuRollNo: 102,
            stuCollege: 'W.H.School',
            stuUniversity: 'U of M'
        },
        {
            stuId: 3,
            stuName: 'Robert',
            stuEmail: 'robert12@gmail.com',
            stuRollNo: 102,
            stuCollege: 'JNU Kanpur',
            stuUniversity: 'GGI Kanpur'
        }
    ];
    
    constructor() {}
    public getStudents(): any {
        const studentsObservable = new Observable(observer => {
            setTimeout(() => {
                observer.next(this.students);
            }, 2000);
        });
        return studentsObservable;
    }
}