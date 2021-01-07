import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pago-ropa',
  templateUrl: './pago-ropa.component.html',
  styleUrls: ['./pago-ropa.component.css']
})
export class PagoRopaComponent implements OnInit {
 usuario = {
nombre: '',
apellido: '',
correo: '',
contraseña: ''
}
loading: boolean; 
  constructor(  ) { 
    this.loading = true;
  }

  ngOnInit(): void {
  }
guardar( formulario:NgForm ){
if ( formulario.invalid ){
  Object.values( formulario.controls ).forEach ( control => {
control.markAllAsTouched();
  } )
}
}

}
