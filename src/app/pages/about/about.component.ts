import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { TittlePageComponent } from "../../components/tittle-page/tittle-page.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavBarComponent, TittlePageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
