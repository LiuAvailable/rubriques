import { TitleStrategy } from "@angular/router";
import { ICriteri } from "../../interficies/criteri/criteri";
import { IValoracio } from "../../interficies/valoracio/IValoracio";

export class Criteri implements ICriteri{
    puntuacio: Array<IValoracio> = []
    nom!: string;

    constructor(nom:string){
        this.nom = nom;
    }

    afegirValoracio(valoracio: IValoracio): void {
        this.puntuacio[valoracio.valor] = valoracio // Ordeno les valoracions per valor
    }
}