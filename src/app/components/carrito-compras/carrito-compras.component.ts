import { Component, OnInit } from '@angular/core';
import { SelectedRopaService } from '../../services/tienda-productos-buy'; 
import { SelectedRopa } from '../../services/tienda-productos-buy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css'] 
})
export class CarritoComprasComponent implements OnInit {
loading: boolean;
 ropas: SelectedRopa [] = [];
 mostrarBtn: boolean;
 ropa: any = {};
 
 
 

  constructor( private selectedRopa: SelectedRopaService,
               private router: Router ) { 
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
  }

  comprar(){
    this.router.navigate(["/pago-ropa"]);
  }

}
