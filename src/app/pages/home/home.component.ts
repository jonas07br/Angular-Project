import { Component, Input } from '@angular/core';
import { TittlePageComponent } from "../../components/tittle-page/tittle-page.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TittlePageComponent, BigCardComponent, SmallCardComponent,NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  theme: string='light';
}
