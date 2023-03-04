import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      <a [routerLink]="'/'">Main</a>
    </h1>
    <ul>
      <li>
        <h2><a [routerLink]="'/blog'">Blog</a></h2>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}
