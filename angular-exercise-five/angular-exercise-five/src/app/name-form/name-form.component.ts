import { Component, OnInit } from '@angular/core';
import { NameServiceService } from '../name-service.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
public name: string = "";
  constructor(public service: NameServiceService) { }

  ngOnInit(): void {

  }
  setName(): void {
      this.service.setName(this.name);
      // this.name = this.service.getName();
    }

}
