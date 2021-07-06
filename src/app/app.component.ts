import { Component, VERSION, Version } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';
  name = 'Angular '+VERSION.major;
  user={
    name:'tran',
    age: 36
  }

  clickMe(event: any){
    console.log('click me!', event)
  }
}
