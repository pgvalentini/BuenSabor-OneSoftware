import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: producto[] = [];
  loading = true;


  constructor(private servicioProducto:ProductoService, private router:Router, private modalService: NgbModal) { }

  ngOnInit() {

    this.servicioProducto.getProducto()
    .subscribe(data => {
      console.log(data);
      for(let ins in data){
        this.producto.push(data[ins]);
      }
      this.loading = false;
    });
  }
}
