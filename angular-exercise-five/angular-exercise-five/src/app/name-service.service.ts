import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameServiceService {
  constructor() {}
  public name: string;

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}
