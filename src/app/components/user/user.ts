import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  name: string = 'Lucas';
}
