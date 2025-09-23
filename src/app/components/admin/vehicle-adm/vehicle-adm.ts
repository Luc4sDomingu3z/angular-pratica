import { Component, OnDestroy, OnInit } from '@angular/core';
import { Dashboard } from '../../../services/dashboard'; // Service Dashboard
import { IonIcon } from '@ionic/angular/standalone';
import { Veiculo } from '../../../models/veiculo.model';
import { VehicleData } from '../../../models/vehicleData.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarroVin } from '../../../utils/carroVinInterface';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicle-adm',
  imports: [IonIcon, ReactiveFormsModule, CommonModule],
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

  vehicles: Veiculo[] = []
  selectedVehicle: Veiculo | null = null;
  vehicleData: VehicleData | null = null;

  carVin!: CarroVin;
  reqVin!: Subscription;

  selectCarForms = new FormGroup({
    cardId: new FormControl('')
  })

  vimForm = new FormGroup({
    vin: new FormControl('')
  })

  onChange() {
    this.vimForm.controls.vin.valueChanges.subscribe((value) => {
      this.reqVin = this.dashboardservice.buscarVin(value as string).subscribe((res) => {
        if (typeof res === "object") {
          this.carVin = res as CarroVin;
        }
      })
    })
  }

  constructor(private dashboardservice: Dashboard) { }

  ngOnInit(): void {
    this.dashboardservice.getVehicles().subscribe((res) => {
      this.vehicles = res.vehicles;
    })
    this.selectCarForms.controls.cardId.valueChanges.subscribe((id) => {
      this.selectedVehicle = this.vehicles[Number(id) - 1]
      this.onChange()
    })
  }
}
