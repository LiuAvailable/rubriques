import { IValoracio } from "../../interficies/valoracio/IValoracio";
import { LocalStorage } from "../localStorage/localStorage";

export class Valoracio implements IValoracio{
    localStrorage:LocalStorage = new LocalStorage();
    valor!: number;
    descripcio!: string;
    constructor(descripcio:string, valor:number){
        this.descripcio= descripcio;
        this.valor= valor;
    }
    public saveValor(valor:number){
        let valoracions:Array<number> = this.localStrorage.getValoracions();
        if(this.novaValoracio(valor,valoracions)){
            valoracions.push(valor);
            this.localStrorage.saveValoracio(valoracions)
        }
    }
    private novaValoracio(valor:number, valoracions:Array<number>){
        let existeix = true;
        let contador = 0;
        if(valoracions.length > 0){
            while((contador < valoracions.length && existeix)){
                if(valor == valoracions[contador]) existeix = false
                contador ++;
            }
        }
        return existeix
    }
}