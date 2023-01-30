import { Utilisateur } from './utilisateur';
import { LocalDate } from 'local-date';
import { formatDate } from '@angular/common';

export class Locataire extends Utilisateur{
    constructor(
        public override id : number,
        public nom : string,
        public prenom :  string,
        public override email : string,
        public mdp : string,
        public override role : string,
        public dateHeureInscription : Date,
        public lienDeParenteString : string,
        public paysString : string,
        public valide : boolean,
        public coefficient : number,
        
        

    ){
        super(id, email, role);
    }
}