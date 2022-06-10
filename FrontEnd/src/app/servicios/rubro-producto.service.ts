import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rubroProducto } from '../modelo/rubroProducto';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RubroProductoService {
  
  url = 'http://localhost:3002/api';

  public rubroProductoData:rubroProducto[]=[];
  
  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
   }

    getRubroProducto(){
      return this.http.get(`${this.url}/rubroProducto`).pipe(
        map( (rubroProductoData: any) => rubroProductoData));
    }

    getRubroProductoXId(idRubroProducto: number){
      return this.http.get(`${this.url}/rubroProducto/${idRubroProducto}`).pipe(
        map( (rubroProductoData: any) => rubroProductoData));
    }

    setRubroProducto(rubroProducto:rubroProducto){
      return this.http.post(`${this.url}/rubroProducto`,rubroProducto);
    }

    updateRubroProducto(rubroProducto:rubroProducto){
      return this.http.put(`${this.url}/rubroProducto/`+rubroProducto.id,rubroProducto);
    }

    async deleteRubroProducto(id:number){
      console.log("Baja Rubro Producto ID " + id);
      let urlServer = `${this.url}/rubroProducto/baja/`+ id;
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
