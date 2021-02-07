import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-down-counter',
  templateUrl: './up-down-counter.component.html',
  styleUrls: ['./up-down-counter.component.css']
})
export class UpDownCounterComponent implements OnInit {
public counter: number = 0;
  constructor() { }
increaseCounter(): void {
  this.counter++;
}
decreaseCounter(): void {
  this.counter--; 
}
  ngOnInit(): void {
  }

}
