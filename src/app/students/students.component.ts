import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
	students: {id: number, name: string, avgGrade:string, phone:string, image:string, visibility:boolean}[] = [
		{
			id: 0,
			name: "Igal",
			avgGrade: "80",
			phone: "0526851255",
			image: "http://testprepshsat.com/wp-content/uploads/2015/07/student-avatar-2.png",
			visibility: false
		},
		{
			id: 1,
			name: "Nathan",
			avgGrade: "100",
			phone: "0526851255",
			image: "http://testprepshsat.com/wp-content/uploads/2015/07/student-avatar-2.png",
			visibility: false
		},
		{
			id: 2,
			name: "Dana",
			avgGrade: "91",
			phone: "0526851255",
			image: "http://testprepshsat.com/wp-content/uploads/2015/07/student-avatar-2.png",
			visibility: false
		},
	];

  onClick(studentId: number) {
  	console.log(studentId);
  	console.log(this.students[studentId].visibility);
  	this.students[studentId].visibility = !this.students[studentId].visibility;
  }

  ngOnInit() {
  }

}
