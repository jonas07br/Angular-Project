import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  projectName:string='projectName';
  projectDescription:string="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
  projectType:string='projectType';
  showDetails:boolean = true;

  show(){
    this.showDetails = !this.showDetails;
  }
}
