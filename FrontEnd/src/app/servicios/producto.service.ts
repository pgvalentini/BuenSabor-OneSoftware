import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { producto } from '../modelo/producto';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

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
      console.log(`${this.url}/producto/${idProducto}`);
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

    //lee todos los platos
    getProductoFromDataBase(): Observable<producto[]>{
      return this.http.get(`${this.url}/producto`).pipe(
        map( (productoData: any) => productoData));
    }


    //busca un plato por el id
    getProductoEnBaseDatosXId(idx:string): Observable<producto>{
      return this.http.get<producto>((`${this.url}/producto`) + idx);
    }

    //busca los instrumentos por un termino de busqueda
    getProductoBusquedaFromDataBase(termino:string): Observable<producto[]>{
      return this.http.get<producto[]>((`${this.url}/producto/buscar/`) + termino);
    }



/*
  public buscarPlatos(termino: string): any[] {
    let platosArr: any[] = [];
    termino = termino.toLowerCase();
    this.productoData = this.getProducto();
    for (let plato of this.productoData) {
      let nombre = plato.denominacion.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        platosArr.push(plato);
      }
    }
    return platosArr;
  }
  */
      
}
