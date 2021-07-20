import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() count: number | undefined;

  @Input('total') total : number | undefined;

  ngOnChanges(simpleChange : SimpleChanges) {
        console.log(simpleChange);
    }

}
