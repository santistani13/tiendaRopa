export class  Productos {
    nombre: string;
    talle: string;
    genero: string;
    valor: number;
    img: string;
    id: Number;



    constructor(nombre: string, talle: string  , genero: string, valor: number, img: string, id: number) {
        this.nombre = nombre; 
        this.talle = talle;
        this.genero = genero;
        this.valor = valor;
        this.img = img;
        this.id = id;

    }
}