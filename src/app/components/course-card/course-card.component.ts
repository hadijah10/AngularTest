import { Component,EventEmitter,Input,Output } from '@angular/core';
import { IData } from '../../model/interfaces/dataInterface';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
 @Input() course:IData = {title:'',img:'',data:''}
 @Output('courseSelected') courseEmitter = new EventEmitter()
 handleClick(){
  console.log('clicked me')
  this.courseEmitter.emit(this.course)
 }
}
