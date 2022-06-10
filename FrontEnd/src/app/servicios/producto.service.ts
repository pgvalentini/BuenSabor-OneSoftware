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

    getProductoXId(idProducto: number){
      return this.http.get(`${this.url}/producto/${idProducto}`).pipe(
        map( (productoData: any) => productoData));
    }

    setProducto(producto:producto){
      return this.http.post(`${this.url}/producto`,producto);
    }

    updateProducto(producto:producto){
      return this.http.put(`${this.url}/producto/`+producto.id,producto);
    }

    async deleteProducto(id:number){
      console.log("Baja Producto ID " + id);
      let urlServer = `${this.url}/producto/baja/`+ id;
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
