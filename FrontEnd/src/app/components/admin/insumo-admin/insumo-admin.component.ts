import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { insumo } from 'src/app/modelo/insumo';
import { InsumoService } from 'src/app/servicios/insumo.service';

@Component({
  selector: 'app-insumo-admin',
  templateUrl: './insumo-admin.component.html',
  styleUrls: ['./insumo-admin.component.css']
})
export class InsumoAdminComponent implements OnInit {

  insumo: insumo = {
    id: 0,
    denominacion: '',
    rubro: '',
    stockActual: 0,
    stockMinimo: 0,
    unidadMedida: '',
    esInsumo: false,
    alta: true,
    precio: 0,
    imagen: ''
  }

  new = false;
  idInsumo: number = 0;

  constructor(private servicioInsumo: InsumoService, private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(
      parametros => {
        this.idInsumo = parametros['id'];
        if (this.idInsumo > 0) {
          servicioInsumo.getInsumoXId(this.idInsumo)
            .subscribe(insumoEncontrado => this.insumo = insumoEncontrado as insumo);
        } else {
          console.log("ES NUEVO");
        }
      }
    );
  }


  ngOnInit() {
  }

  save() {
    if (this.idInsumo == 0) {
      console.log('nuevo');
      this.servicioInsumo.setInsumo(this.insumo)
        .subscribe((data: any) => {
          if (data && data.id) {
            this.router.navigate(['/insumo-admin/' + data.id]);
          }
        },
          error => console.error(error));
    } else {
      /*
      console.log(`Update ${this.idInsumo}`);
      this.servicioInsumo.updateInsumo(this.idInsumo)
        .subscribe((data: any) => {
          if (data && data.id) {
            console.log(data);
          }
        },
          error => console.error(error));
    }
    */
  }
/*
  addNew(formu: NgForm) {
    this.router.navigate(['/insumo-admin/0']);
    formu.reset({
      id: 0,
      denominacion: '',
      rubro: '',
      stockActual: 0,
      stockMinimo: 0,
      unidadMedida: '',
      esInsumo: false,
      alta: true,
      precio: 0,
      imagen: ''
    });
    */
  }
}