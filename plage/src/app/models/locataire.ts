import { Utilisateur } from './utilisateur';
import { LocalDate } from 'local-date';
import { formatDate } from '@angular/common';

export class Locataire extends Utilisateur{
    constructor(
        public override id : number,
        public override email : string,
        public override role : string,
        public dateHeure : String,
        public lienDeParente : string,
        public pays : string,
        public valide : boolean,
        public coef : number,
        public nom : string,
        public prenom : string, 
        public mdp,

    ){
        super(id, email, role);
    }
}