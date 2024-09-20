import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [NgIf,RouterLink,NgStyle],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() projectName:string='projectName';
  @Input() projectDescription:string="projectDescription";
  @Input() projectType:string='projectType';
  @Input() projectId:string='projectId';
  bgColor:string='blue';
  showDetails:boolean = true;

  ngOnInit() {
    this.bgColor = this.getRandomColor();
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  show(){
    this.showDetails = !this.showDetails;
  }
}
