export class Persona{
    id?: number;
    nombre: string;
    profesion: string;
    locacion: string;
    imgProfile: string;
    acercaDe: string;



    constructor(nombre: string,  profesion: string, locacion: string, imgProfile: string, acercaDe: string){
        this.nombre = nombre;
        this.profesion = profesion;
        this.locacion = locacion;
        this.imgProfile = imgProfile;
        this.acercaDe = acercaDe;
  
    }

}


