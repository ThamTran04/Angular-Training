import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Component Interaction';
  Counter = 10;

  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  }

}
