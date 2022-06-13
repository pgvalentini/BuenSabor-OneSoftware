import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent implements OnInit {
  
  platosBusqueda: producto[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private servicioProducto: ProductoService, private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.servicioProducto.getProductoBusquedaFromDataBase(this.termino)
        .subscribe(data => {
          this.platosBusqueda = [];
          for (let inst in data) {
            this.platosBusqueda.push(data[inst]);
          }
        });
    });


  }
  
  public verPlato(idx: number) {
    this.router.navigate(['/detallePlato', idx])
  }
}
