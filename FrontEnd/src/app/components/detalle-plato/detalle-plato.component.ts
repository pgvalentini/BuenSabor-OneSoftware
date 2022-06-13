import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-detalle-plato',
  templateUrl: './detalle-plato.component.html',
  styleUrls: ['./detalle-plato.component.css']
})

export class DetallePlatoComponent implements OnInit {

  public plato: any;

  constructor(private activatedRoute: ActivatedRoute, private servicioProducto: ProductoService) {

    this.activatedRoute.params.subscribe(params => {
      this.servicioProducto.getProductoXId(params['id']).subscribe(productoEncontrado => this.plato = productoEncontrado as producto);
    })

  }

  ngOnInit(): void {
  }

}