export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaIni: Date;
    fechaFin: Date;
    imagen: string;
    urlEdu: string;

    constructor(nombreE: string, descripcionE: string, fechaIni: Date, fechaFin: Date, imagen: string, urlEdu: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        this.imagen = imagen;
        this.urlEdu = urlEdu;
    }
}
