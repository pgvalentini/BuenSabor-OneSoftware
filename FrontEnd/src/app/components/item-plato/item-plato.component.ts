import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { producto } from 'src/app/modelo/producto';

@Component({
  selector: 'app-item-plato',
  templateUrl: './item-plato.component.html',
  styleUrls: ['./item-plato.component.css']
})
export class ItemPlatoComponent implements OnInit {

  @Input() platoAux:producto;
  @Input() index:number;
  @Output() platoSeleccionado:EventEmitter<number>;

  constructor(private router:Router) {
    this.platoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public verPlato(){
    this.platoSeleccionado.emit(this.index);
  }

}
