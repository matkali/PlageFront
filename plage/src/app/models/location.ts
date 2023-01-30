import { Concessionnaire } from "./concessionnaire";
import { Statut } from './statut';

export class Location{
    constructor(
        public dateDebut : Date,
        public dateFin : Date,
        public montantAReglerEnEuros : number,
        public remarque : string,
        public concessionnaire : Concessionnaire,
        public statut : Statut,
        public nbParasols : number,
    ){}
}