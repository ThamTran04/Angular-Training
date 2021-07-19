import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'angular-training';

  user={
    name:'tran',
    age: 36
  }

  clickMe(event: any){
    console.log('click me!', event)
  }

}
