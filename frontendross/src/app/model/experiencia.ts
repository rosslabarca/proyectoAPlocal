export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaIni: Date;
    fechaFin: Date;
    imagenE: string;
    urlE: string;

    constructor(nombreE: string, descripcionE: string, fechaIni: Date, fechaFin: Date, imagenE: string, urlE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        this.imagenE = imagenE;
        this.urlE = urlE;
    }
}
