import { Routes } from '@angular/router';
import { User } from './user/user';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    title: 'Página principal',
    component: Home,
  },
  {
    path: 'user',
    title: 'Página do usuário',
    component: User,
  },
];
