import { Criteri } from "../criteri/criteri";

export class LocalStorage{
    criteris:Array<Criteri> = this.getCriteris();

    private getCriteris(){
        let item = localStorage.getItem('criteris');
        if(item!=null) return JSON.parse(item);
        else return null;
    }
    private setCriteris(){
        let string_criteris = JSON.stringify(this.criteris)
        localStorage.setItem('criteris', string_criteris);

    }

    public getCriteri(nom:string){
        console.log(this.criteris[this.loopInCriteris(nom)-1]);
    }

    public saveCriteri(nom:string){
        if(this.criteriExists(nom)){
            this.criteris.push(new Criteri(nom));
            this.setCriteris();
        }else console.log('existeix');
    }
    private criteriExists(nom:string){
        if(this.loopInCriteris(nom) == this.criteris.length) return false;
        else return true;
    }

    /* Busca un criteri en concret
    * @return posicio del criteri en l'array
    */
    private loopInCriteris(nom:string){
        let contador = 0;
        let trobat = true;
        while(contador < this.criteris.length && trobat ){
            if(this.criteris[contador].nom.toLowerCase() == nom.toLowerCase()) trobat = false;
            contador++;
        }
        return contador;
    }
}