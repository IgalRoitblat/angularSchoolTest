import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
	courses: {id: number, name: string, duration:string, image:string, description:string, visibility:boolean}[] = [
		{
			id: 0,
			name: "PHP",
			duration: "30 Hours",
			image: "https://openclipart.org/image/800px/svg_to_png/188820/presentation-icon-female.png",
			description: "This is a great course! hope you like it!",
			visibility: false
		},
		{
			id: 1,
			name: "Javascript",
			duration: "20 Hours",
			image: "https://openclipart.org/image/800px/svg_to_png/188820/presentation-icon-female.png",
			description: "This is a great course! hope you like it!",
			visibility: false
		},
		{
			id: 2,
			name: "Python",
			duration: "10 Hours",
			image: "https://openclipart.org/image/800px/svg_to_png/188820/presentation-icon-female.png",
			description: "This is a great course! hope you like it!",
			visibility: false
		}

	];

  onClick(courseId: number) {
  	console.log(courseId);
  	console.log(this.courses[courseId].visibility);
  	this.courses[courseId].visibility = !this.courses[courseId].visibility;
  }

  ngOnInit() {
  }

}
