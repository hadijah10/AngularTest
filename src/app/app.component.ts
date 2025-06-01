import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { cardData } from './model/data/data';
import { IData } from './model/interfaces/dataInterface';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CourseCardComponent,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  courses:IData []= cardData

  
  onCourseViewed(event:IData){
    console.log(event)
  }
}

