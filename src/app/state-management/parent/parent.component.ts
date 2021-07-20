import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'Component Interaction';
  Counter = 10;

  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  }

  public isShowing: boolean = true;
  public num1: number = 0;
  public num2: number = 0;
  public total: number = 0;

  totalNumber() {
    this.total = this.num1 + this.num2;
  }
}
