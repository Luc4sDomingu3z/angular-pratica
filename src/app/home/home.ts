import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [RouterLink],
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
}
