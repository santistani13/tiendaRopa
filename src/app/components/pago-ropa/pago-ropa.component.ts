import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SelectedRopa, SelectedRopaService } from 'src/app/services/tienda-productos-buy';
import Swal from 'sweetalert2'

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
    codigoPostal: '',
    ciudad: '',
    direccion: '',
    numeroTarjeta: '',
    codigoTarjeta: ''
  }

  ropas: SelectedRopa[] = [];
  loading: boolean;
  constructor(private selectedRopa: SelectedRopaService,
              ) {
    this.loading = true;
    this.loading = false;
    console.log(this.selectedRopa.getRopas());
    this.ropas = this.selectedRopa.getRopas();
  }

  ngOnInit(): void {

  }
  guardar(formulario: NgForm) {
    if (formulario.invalid) {
      Object.values(formulario.controls).forEach(control => {
        control.markAllAsTouched();
      })
    }
  }

  confirmarCompra( formulario: NgForm){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Gracias por su compra',
      showConfirmButton: false,
      timer: 2000
    })
    if ( formulario.invalid ){
      Object.values( formulario.controls ).forEach( control => {
        control.markAllAsTouched();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se ha podido realizar la compra!',
          footer: 'Revisa el formulario de compra'
        })
      })
    }

  }

}
