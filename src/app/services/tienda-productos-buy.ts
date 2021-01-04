import { Injectable } from '@angular/core';


@Injectable()
export class SelectedRopaService {
  private ropas: SelectedRopa[] = [
  ];
  constructor() {
   // this.cargarRopa();
  }
  getRopas() {
    return this.ropas;
  }
  addRopa(ropa:SelectedRopa){ 
      this.ropas.push(ropa);
      this.guardarRopa()
  }

  guardarRopa(){
    localStorage.setItem( 'data', JSON.stringify(this.ropas)  );
  }
  cargarRopa(){
   //if (  localStorage.getItem( 'data') ){
     // this.ropas = JSON.parse( localStorage.getItem( 'data') );
    }
  }

export interface SelectedRopa {
  nombre: string;
  talle: string;
  genero: string;
  valor: number;
  img: string;
  id: number;
}
