export class Proyectos {
    id?: number;
    nombreP:string;
    descripcionP: string;
    imagenP: string;
    url: string;

    constructor(nombreP: string, descripcionP: string, imagenP: string, url: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.imagenP = imagenP;
        this.url = url;
    }
}
