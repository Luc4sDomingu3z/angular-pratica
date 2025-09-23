import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dashboard {
  private baseUrl = 'http://localhost:3001'

  constructor(private http: HttpClient) {}
  getVehicles() {
    return this.http.get('')
  }

  buscarVin(codigoVin: string) {
    const reqVin= this.http.post(``, {})
    return reqVin
  }
}
