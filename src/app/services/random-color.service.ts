import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorService {
  public colors: string[];
  constructor() { 
    this.colors = ["green", "blue", "orange"]
  }
  getRandomColor(){
    let randomIndex: number = Math.floor(Math.random() * 3);
    return this.colors[randomIndex];
  }
}
