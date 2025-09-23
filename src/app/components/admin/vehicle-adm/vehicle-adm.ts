import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-vehicle-adm',
  imports: [IonIcon],
  templateUrl: './vehicle-adm.html',
  styleUrl: './vehicle-adm.scss',
})
export class VehicleAdm {
  createVehicle() {
    const dialogForm: HTMLDialogElement | null = document.querySelector(
      '.dashboard-form-container',
    );

    if (dialogForm === null) return;
    dialogForm.showModal();
  }

  
}
