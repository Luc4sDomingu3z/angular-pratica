import { Component, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { Dashboard } from '../../../services/dashboard'; // Service Dashboard
import { IonIcon } from '@ionic/angular/standalone';
import { Veiculo, VeiculosAPI } from '../../../models/veiculo.model';
import { VehicleData } from '../../../models/vehicleData.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarroVin } from '../../../utils/carroVinInterface';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import fs from 'fs';

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

  vehicles: Veiculo[] = [
    {
      id: 1,
      vehicle: 'Ranger',
      volumetotal: 145760,
      connected: 70000,
      softwareUpdates: 27550,
      img: 'http://localhost:3001/img/ranger.png',
      img_local: '/api/img/ranger.png',
    },
    {
      id: 2,
      vehicle: 'Mustang',
      volumetotal: 1500,
      connected: 500,
      softwareUpdates: 750,
      img: 'http://localhost:3001/img/mustang.png',
      img_local: '/api/img/mustang.png',
    },
    {
      id: 3,
      vehicle: 'Territory',
      volumetotal: 4560,
      connected: 4000,
      softwareUpdates: 3050,
      img: 'http://localhost:3001/img/territory.png',
      img_local: '/api/img/territory.png',
    },
    {
      id: 4,
      vehicle: 'Bronco Sport',
      volumetotal: 7560,
      connected: 4060,
      softwareUpdates: 2050,
      img: 'http://localhost:3001/img/broncoSport.png',
      img_local: '/api/img/broncoSport.png',
    },
  ];
  selectedVehicle: Veiculo | null = null;
  vehicleData: VehicleData[] = [
    { id: 1, odometro: 23344, nivelCombustivel: 76, status: 'on', lat: -12.2322, long: -35.2314 },
    { id: 2, odometro: 130000, nivelCombustivel: 19, status: 'off', lat: -12.2322, long: -35.2314 },
    { id: 3, odometro: 50000, nivelCombustivel: 90, status: 'on', lat: -12.2322, long: -35.2314 },
    { id: 4, odometro: 10000, nivelCombustivel: 25, status: 'off', lat: -12.2322, long: -35.2314 },
    { id: 6, odometro: 23574, nivelCombustivel: 76, status: 'on', lat: -12.2322, long: -35.2314 },
  ];

  carVin!: CarroVin;
  reqVin!: Subscription;

  /**
   * Meu código
   */
  async loadCars() {
    try {
      const viewFile = fs.readFileSync('src/app/api/api.json', { encoding: 'utf-8' });
      return viewFile;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  execAGora(alvo: any, runTimer: string) {
    console.time(`${runTimer}`);
    console.trace(alvo);
    console.timeEnd(`${runTimer}`);
  }

  pegandoCarros() {
    this.loadCars()
      .then((res) => {
        if (typeof res !== 'string') return;
        const jd: VeiculosAPI = JSON.parse(res);
        this.vehicles = jd.vehicles;
      })
      .catch((err) => this.execAGora(err, 'Vixe error'));
  }

  loadCar(e: Event) {
    const select: HTMLSelectElement = e.target as HTMLSelectElement
    console.log(select.value);
    if (select === null) return

    const value = select.value
    for (let car of this.vehicles) {
      if (Number(value) === car.id) {
        this.selectedVehicle = car
      }
    }

    if (this.selectedVehicle !== null) {
      for (let data of this.vehicleData) {
        if (this.selectedVehicle.id === data.id) {

        }
      }
    }
    console.log(this.selectedVehicle)
  }

  // selectCarForms = new FormGroup({
  //   cardId: new FormControl('')
  // })

  // vimForm = new FormGroup({
  //   vin: new FormControl('')
  // })

  // onChange() {
  //   this.vimForm.controls.vin.valueChanges.subscribe((value) => {
  //     this.reqVin = this.dashboardservice.buscarVin(value as string).subscribe((res) => {
  //       if (typeof res === "object") {
  //         this.carVin = res as CarroVin;
  //       }
  //     })
  //   })
  // }

  // constructor(private dashboardservice: Dashboard) { }

  // ngOnInit(): void {
  //   this.dashboardservice.getVehicles().subscribe((res) => {
  //     this.vehicles = res.vehicles;
  //   })
  //   this.selectCarForms.controls.cardId.valueChanges.subscribe((id) => {
  //     this.selectedVehicle = this.vehicles[Number(id) - 1]
  //     this.onChange()
  //   })
  // }
}
