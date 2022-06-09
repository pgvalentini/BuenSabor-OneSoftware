import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { insumo } from '../modelo/insumo';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  url = 'http://localhost:3002/api';

  public insumoData:insumo[]=[];
  
  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
   }

    getInsumo(){
      return this.http.get("http://localhost:3002/api/insumo").pipe(
        map( (insumoData: any) => insumoData));
    }

}