import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [RouterLink, IonIcon],
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

  public bannerIconChange(el: PointerEvent): void {
    console.log(el);
    return;
  }
}
