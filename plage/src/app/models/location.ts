import { Concessionnaire } from "./concessionnaire";
import { Statut } from './statut';
import { Parasol } from './parasol';
import { Locataire } from 'src/app/models/locataire';


export class Location{
    
    public id :number = 0;
    constructor(
        public dateDebut : Date,
        public dateFin : Date,
        public montantAReglerEnEuros : number,
        public remarque : string,
        public concessionnaire : Concessionnaire,
        public statut : Statut,
        public nbParasols : number,
        public parasols: Parasol[],
        public locataire: Locataire
    ){}
}