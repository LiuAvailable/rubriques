import { IValoracio } from "../valoracio/IValoracio";

export interface ICriteri{
    nom: string;
    puntuacio: Array<IValoracio>;
}