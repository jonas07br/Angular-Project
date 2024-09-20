import { projects } from './../../service/projects-service';
import { Component, Input } from '@angular/core';
import { TittlePageComponent } from "../../components/tittle-page/tittle-page.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { NgFor } from '@angular/common';
import * as projectsService from '../../service/projects-service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TittlePageComponent, BigCardComponent, SmallCardComponent,NavBarComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  theme: string='light';
  projectsB = projects.slice(0,(projects.length)/2);
  projectsS = projects.slice(projects.length/2,projects.length);

}
