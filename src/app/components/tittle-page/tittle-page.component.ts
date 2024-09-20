import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tittle-page',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './tittle-page.component.html',
  styleUrl: './tittle-page.component.css'
})
export class TittlePageComponent implements OnInit {
  tittle:string='empty';

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      if(url[0].path == 'home'){
        this.tittle = 'My Projects';
      }
      else if(url[0].path == 'about'){
        this.tittle = 'About Me';
      }
      else if(url[0].path=='contact'){
        this.tittle = 'Contact Me';

      }
    });
  }


}
