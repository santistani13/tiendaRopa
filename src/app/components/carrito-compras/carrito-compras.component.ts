import { Component, OnInit } from '@angular/core';
import { SelectedRopaService } from '../../services/tienda-productos-buy'; 
import { SelectedRopa } from '../../services/tienda-productos-buy';

@Component({
  selector: 'app-carrito-compras'
})
export class CarritoComprasComponent implements OnInit {
loading: boolean;
 private ropas: SelectedRopa [] = [];
 mostrarBtn: boolean;
 

  constructor( private selectedRopa: SelectedRopaService ) { 
    this.loading = true;
    this.loading = false;
    this.mostrarBtn = false;
  }

  ngOnInit(): void {
    console.log( this.selectedRopa.getRopas() );
    this.ropas = this.selectedRopa.getRopas();
   if ( this.ropas.length > 0 ) {
    this.mostrarBtn = true;
   }
  }

  borrarDeLista( i: number ){
    this.ropas.splice( i, 1 );
    if ( this.ropas.length > 0 ) {
      this.mostrarBtn = true;
     }
  }

}
