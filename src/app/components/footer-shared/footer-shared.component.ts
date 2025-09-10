import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer-shared',
  templateUrl: './footer-shared.component.html',
  styleUrls: ['./footer-shared.component.scss'],
  imports: [RouterLink, IonIcon],
})
export class FooterSharedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}


  public showFooter: boolean = false
}
