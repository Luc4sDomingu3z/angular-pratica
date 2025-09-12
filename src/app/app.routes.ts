import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { Home } from './components/home/home';
import { AppAdm } from './components/admin/app-adm/app-adm';
import { Login } from './components/admin/login/login';

export const routes: Routes = [
  {
    path: '',
    title: 'Página principal',
    component: Home,
  },
  {
    path: 'user',
    title: 'Página do usuário',
    component: User
  },
  // Dashboard
  {
    path: 'dashboard',
    title: 'Dashboard Ford',
    component: AppAdm
  },
  {
    path: 'dashboard/login',
    title: 'Dash home',
    component: Login
  }
];
