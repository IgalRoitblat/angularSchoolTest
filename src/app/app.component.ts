import { Component } from '@angular/core';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'our school';
}
