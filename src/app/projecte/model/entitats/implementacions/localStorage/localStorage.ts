import { Criteri } from "../criteri/criteri";

export class LocalStorage{
    criteris:Array<Criteri> = this.getCriteris();

    public getCriteris(){
        let item = localStorage.getItem('criteris');
        if(item!=null) return JSON.parse(item);
        else return [];
    }
    private setCriteris(){
        let string_criteris = JSON.stringify(this.criteris)
        localStorage.setItem('criteris', string_criteris);

    }

    public getCriteri(nom:string){
        return this.criteris[this.loopInCriteris(nom)-1];
    }

    public saveCriteri(criteri:Criteri){
        if(this.criteriExists(criteri.nom)){
            this.criteris.push(new Criteri(criteri.nom));
            this.setCriteris();
        }else{
            let posicio = this.loopInCriteris(criteri.nom)-1;
            this.criteris[posicio] = criteri;
            this.setCriteris()
        }
    }
    private criteriExists(nom:string){
        if(this.criteris.length == 0 || this.loopInCriteris(nom) > this.criteris.length) return true;
        else return false;
    }

    /* Busca un criteri en concret
    * @return posicio del criteri en l'array
    */
    private loopInCriteris(nom:string){
        let contador = 0;
        if(this.criteris.length > 0){
            let trobat = true;
            while(contador < this.criteris.length && trobat ){
                if(this.criteris[contador].nom.toLowerCase() == nom.toLowerCase()) trobat = false;
                contador++;
            }
            if(trobat) contador ++; //si no l'ha trobat suma
        }else contador = -1;
        return contador;
    }


    public getValoracions(){
        let item = localStorage.getItem('valoracions');
        if(item!=null) {
            let array:Array<number> =  JSON.parse(item)
            return array
        }
        else return [];
    }
    public saveValoracio(valoracio:Array<number>){
        let array = JSON.stringify(valoracio)
        localStorage.setItem('valoracions', array);
    }
    
    public getActive(){
        let item = localStorage.getItem('actives');
        if(item!=null) {
            let array=  JSON.parse(item)
            return array
        }
        else return [];
    }
    public saveActive(element:Array<Array<number>>){
        let array = JSON.stringify(element)
        localStorage.setItem('actives', array);
    }
}