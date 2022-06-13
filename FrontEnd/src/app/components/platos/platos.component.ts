import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  platosArr: any = [];
  loading = true;


  constructor(private servicioProducto:ProductoService, private router:Router) { }

  ngOnInit() {
    this.servicioProducto.getProducto()
    .subscribe(data => {
      console.log(data);
      for(let ins in data){
        this.platosArr.push(data[ins]);
      }
      this.loading = false;
    });
    
  }

  public verPlato(idx:number){
    console.log("ID PLATO " + idx);
    this.router.navigate(['/detallePlato', idx])
    }

}
