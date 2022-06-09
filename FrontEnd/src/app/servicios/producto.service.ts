import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { producto } from '../modelo/producto';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:3002/api';

  public productoData:producto[]=[];
  
  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
   }

    getProducto(){
      return this.http.get(`${this.url}/producto`).pipe(
        map( (productoData: any) => productoData));
    }

}
