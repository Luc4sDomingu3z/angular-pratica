import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header-shared',
  templateUrl: './header-shared.component.html',
  styleUrls: ['./header-shared.component.scss'],
  imports: [IonIcon, RouterLink]
})
export class HeaderSharedComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
