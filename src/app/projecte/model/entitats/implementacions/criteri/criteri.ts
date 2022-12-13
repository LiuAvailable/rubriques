import { ICriteri } from "../../interficies/criteri/criteri";
import { IValoracio } from "../../interficies/valoracio/IValoracio";

export class Criteri implements ICriteri{
    puntuacio!: IValoracio[];
    nom!: string;
}