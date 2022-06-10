import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rubroProducto } from '../modelo/rubroProducto';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RubroGeneralService {
  
  url = 'http://localhost:3002/api';

  public rubroProductoData:rubroProducto[]=[];
  
  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
   }

    getProducto(){
      return this.http.get(`${this.url}/rubroProducto`).pipe(
        map( (rubroProductoData: any) => rubroProductoData));
    }

}
