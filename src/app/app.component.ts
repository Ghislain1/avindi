import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avindi-app';
  version = 'Angular version 12.2.12';


  constructor(
    public router: Router,
    public renderer: Renderer2) { }

  onSelectMenu(link: any): void {
    const element = document.getElementById('bd-docs-nav');
    this.renderer.removeClass(element, 'show');
    const route = '/' + link;
    this.router.navigate([route]);
  }


}
