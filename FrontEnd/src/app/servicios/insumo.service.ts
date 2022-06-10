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
      return this.http.get(`${this.url}/insumo`).pipe(
        map( (insumoData: any) => insumoData));
    }

    getInsumoXId(idInsumo: number){
      return this.http.get(`${this.url}/insumo/${idInsumo}`).pipe(
        map( (insumoData: any) => insumoData));
    }

    setInsumo(insumo:insumo){
      return this.http.post(`${this.url}/insumo`,insumo);
    }

    updateInsumo(insumo:insumo){
      return this.http.put(`${this.url}/insumo/`+insumo.id,insumo);
    }

    async deleteInsumo(id:number){
      console.log("Baja Insumo ID " + id);
      let urlServer = `${this.url}/insumo/baja/`+ id;
      await fetch(urlServer, {
        method: 'PUT',
            headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
            mode: 'cors'
      });
    }
    
}
