import { Component, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { HeaderSharedComponent } from '../header-shared/header-shared.component';
import { FooterSharedComponent } from '../footer-shared/footer-shared.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [IonIcon, RouterLink, HeaderSharedComponent, FooterSharedComponent],
})
export class Home {
  untouchImg(e: Event) {
    const target = e.target as HTMLElement;
    const image: HTMLImageElement | null = target.querySelector('img');
    if (image !== null) {
      image.addEventListener('click', (imgEvent) => {
        if (imgEvent.detail === 2) imgEvent.preventDefault();
      });
    }
  }

  public bannerIconChange(e: PointerEvent): void {
    if (e.target === null) return;
    const btnTarget: HTMLButtonElement | null = e.target as HTMLButtonElement;
    let parentDiv: HTMLDivElement | null = btnTarget.parentElement as HTMLDivElement;
    const icon = btnTarget.querySelector('ion-icon');

    parentDiv = parentDiv.parentElement?.parentElement as HTMLDivElement;
    if (parentDiv === null || icon === null || !parentDiv.classList.contains('banner-section-info'))
      return;

    parentDiv.classList.toggle('toggle-banner-section');
    icon.name = parentDiv.classList.contains('toggle-banner-section')
      ? 'arrow-forward'
      : 'arrow-back';
    console.log(parentDiv);

    return;
  }
}
