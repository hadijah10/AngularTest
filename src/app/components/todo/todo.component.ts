import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
    title = 'Mark'
    task: string = '';
    count= 0;
    course = 'angular-course';
    index:number | null = null
    shouldUpdate:boolean = false

    data={
    name: 'Reese',
    age: 24
  }
  Tasks:string[] = []
  increaseCount(){
    this.count +=1;
  }
  decreaseCount(){
     this.count -=1;
  }
  addTask(){
    if(this.shouldUpdate && this.index ){
      this.Tasks.splice(this.index,1,this.task)
      this.task = ''
      this.shouldUpdate = false
      this.index = null
      
    }
    else{
        if(this.task.trim() !== ''){
      this.Tasks.push(this.task)
    this.task = '';
    }
    }
    
  }
  onDelete(index:number){
    // this.Tasks = this.Tasks.filter(t => task !== t);
    this.Tasks.splice(index,1)
  }
  update(index:number){
    this.index = index
    this.task = this.Tasks[index]
    this.shouldUpdate = true
  }
  disp(tex:string | null){
    console.log(tex)
  }
     handletheme(event:Event){
    const body = document.querySelector('body') as HTMLElement
    body.classList.toggle('dark-theme')

  }
  handleClickBubble(){
    console.log('Parent clicked')
  }
}
