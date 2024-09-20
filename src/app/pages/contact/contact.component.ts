import { Component } from '@angular/core';
import { TittlePageComponent } from "../../components/tittle-page/tittle-page.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TittlePageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
