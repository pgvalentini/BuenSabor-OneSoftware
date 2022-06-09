import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ManufacturadoService {
  url = 'http://localhost:9000/manufacturado';

  constructor(private http: HttpClient) { }

  setManufacturado(manufacturado: producto) {
    return this.http.post(`${this.url}/agregar`, manufacturado);
  }

  updateManufacturado(manufacturado: producto) {
    return this.http.put(`${this.url}/actualizar`, manufacturado);
  }
  getManufacturado() {
    return this.http.get(`${this.url}/listar`);
  }

}
