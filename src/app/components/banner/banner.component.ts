import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() type: 'success' | 'info' | 'warn' | 'none' = 'none';
  @Input() message = '';

  @HostBinding('class')
  get hostClass() {
    if (this.type !== 'none') {
      return `app-banner-${this.type}`;
    }

    return 'none';
  }
  constructor() {}

  ngOnInit(): void {}
}
