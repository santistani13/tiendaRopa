import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectedRopa, SelectedRopaService } from 'src/app/services/tienda-productos-buy';

@Component({
  selector: 'app-pago-ropa',
  templateUrl: './pago-ropa.component.html',
  styleUrls: ['./pago-ropa.component.css']
})
export class PagoRopaComponent implements OnInit {
 usuario = {
nombre: '',
apellido: '',
email: '',
contrasenia: ''
}

ropas: SelectedRopa [] = [];
loading: boolean; 
  constructor( private selectedRopa: SelectedRopaService ) { 
    this.loading = true;
    this.loading = false;
  }

  ngOnInit(): void {
    console.log( this.selectedRopa.getRopas() );
    this.ropas = this.selectedRopa.getRopas();
  }
guardar( formulario:NgForm ){
if ( formulario.invalid ){
  Object.values( formulario.controls ).forEach ( control => {
control.markAllAsTouched();
  } )
}
}

}
