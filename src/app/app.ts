import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { HeaderSharedComponent } from './header-shared/header-shared.component';
import { FooterSharedComponent } from './footer-shared/footer-shared.component';

import * as iconsName from 'ionicons/icons';

@Component({
  selector: 'app-root',
  imports: [HeaderSharedComponent, FooterSharedComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('projeto-angular-app');
  constructor() {
    addIcons(iconsName);
  }

  public showHeader: boolean = true;
}
