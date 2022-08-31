export class Skills {
    id?: number;
    nombreSkills: string;
    porcentaje: number;

    constructor(nombreSkills: string, porcentaje: number){
        this.nombreSkills = nombreSkills;
        this.porcentaje = porcentaje;
    }
}
