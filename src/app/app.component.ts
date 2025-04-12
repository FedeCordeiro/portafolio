import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'portafolio';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private translate: TranslateService
  ) {
    // Idioma por defecto
    this.translate.setDefaultLang('en');
  }

  // Cambiar idioma
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  // Scroll automático al fragmento en la URL
  ngAfterViewInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          this.viewportScroller.scrollToAnchor(fragment);
        }
      }
    });
  }
}
