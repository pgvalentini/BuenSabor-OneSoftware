import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { rubroInsumo } from '../modelo/rubroInsumo';

@Injectable({
  providedIn: 'root'
})
export class RubroInsumoService {
  url = 'http://localhost:3002/api';

  public rubroInsumoData:rubroInsumo[]=[];
  
  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
   }

    getRubroInsumo(){
      return this.http.get(`${this.url}/rubroInsumo`).pipe(
        map( (rubroInsumoData: any) => rubroInsumoData));
    }

    getRubroInsumoXId(idRubroInsumo: number){
      return this.http.get(`${this.url}/rubroInsumo/${idRubroInsumo}`).pipe(
        map( (rubroInsumoData: any) => rubroInsumoData));
    }

    setRubroInsumo(rubroInsumo:rubroInsumo){
      return this.http.post(`${this.url}/rubroInsumo`,rubroInsumo);
    }

    updateRubroInsumo(rubroInsumo:rubroInsumo){
      return this.http.put(`${this.url}/rubroInsumo/`+rubroInsumo.id,rubroInsumo);
    }

    async deleteRubroInsumo(id:number){
      console.log("Baja Rubro Insumo ID " + id);
      let urlServer = `${this.url}/rubroInsumo/baja/`+ id;
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