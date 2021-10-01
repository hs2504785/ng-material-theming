import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mydemo';
  themeElm = this.document.getElementById('app-theme');

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  setTheme(event: any): any {
    console.log('PPA', event.target.value);

    this.renderer.setAttribute(
      this.themeElm,
      'href',
      `${event.target.value}-theme.css`
    );
  }
}
