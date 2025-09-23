import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { HeaderSharedComponent } from './components/header-shared/header-shared.component';
import { FooterSharedComponent } from './components/footer-shared/footer-shared.component';

import * as iconsName from 'ionicons/icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('projeto-angular-app');

  constructor() {
    addIcons(iconsName);
  }

}
