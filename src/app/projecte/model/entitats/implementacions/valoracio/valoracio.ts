import { IValoracio } from "../../interficies/valoracio/IValoracio";

export class Valoracio implements IValoracio{
    valor!: number;
    descripcio!: string;
    constructor(descripcio:string, valor:number){
        this.descripcio= descripcio;
        this.valor= valor;
    }
}