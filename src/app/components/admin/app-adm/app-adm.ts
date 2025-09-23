import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { HeaderSharedAdmin } from '../header-shared-admin/header-shared-admin';
import { VehicleAdm } from '../vehicle-adm/vehicle-adm';

@Component({
  selector: 'app-adm',
  imports: [IonIcon, HeaderSharedAdmin, VehicleAdm],
  templateUrl: './app-adm.html',
  styleUrl: './app-adm.scss'
})
export class AppAdm {
  
  sidebarCollapse() {
    const sideBar = document.querySelector('.dashboard-sidebar')
    if (sideBar === null) return;

    console.log('oi')
    sideBar.classList.toggle('collapse')
  }
}
