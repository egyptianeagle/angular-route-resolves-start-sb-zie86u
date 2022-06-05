import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>
        <a routerLinkActive="active-link"
           routerLink="/home">
          HOME
        </a>
      </li>
      
      <li>
        <a routerLinkActive="active-link"
           routerLink="/news">
          NEWS
        </a>
      </li>
      
    </ul>
    <br>
    <router-outlet></router-outlet>
  `,
  styleUrls:  ['app.component.css']
})

export class AppComponent {}