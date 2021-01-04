
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TiendaRopaService {
   


  private ropa : Ropa [] = [
    {
      nombre: "Remera Negra",
      talle: "M, L Y XL",
      genero: "Masculino",
      valor: 1000 ,
      img: "assets/remeranegra.png",
      id: 1 
    },
    {
    nombre: "Remera Azul",
      talle: "M, L Y XL",
      genero: "Masculino",
      valor:  1000,
      img: "assets/remeraazul.jpg",
      id: 2
    },
    {
      nombre: "Remera Gris",
      talle: "M, L Y XL",
      genero: "Masculino",
      valor:  1200,
      img: "assets/remeragris.png",
      id: 3
    },
    {
      nombre: "Remera con Bigote",
      talle: "M, L Y XL",
      genero: "Masculino",
      valor:  1500,
      img: "assets/remeraconbigotes.png",
      id: 4
    },

  ]
  constructor() {
  }
  
getRopa (){
  return this.ropa;
}

getRopaUnica ( idx: any ){
return this.ropa[idx];
}
getRopaBuscada( termino: string ){
let ropaArr: Ropa [] = [];
termino = termino.toLowerCase();

for ( let prenda of this.ropa ){
  let nombre = prenda.nombre.toLowerCase();
  if ( nombre.indexOf( termino ) >= 0 ){
    ropaArr.push( prenda );
  }
}
return ropaArr;
}

}




export interface Ropa {
  nombre: string,
  talle: string,
  genero: string,
  valor: number,
  img: string,
  id: number
}
