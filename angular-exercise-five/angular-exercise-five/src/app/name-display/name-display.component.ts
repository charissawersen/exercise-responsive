import { Component, OnInit } from '@angular/core';
import { NameServiceService } from '../name-service.service';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {
public name:string;
  constructor(public service: NameServiceService) { }

  ngOnInit(): void {
    // this.name = this.service.getName();
  }
getName(): void {
  this.name = this.service.getName();
}
}
