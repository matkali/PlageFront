import { Utilisateur } from './utilisateur';

export class Locataire extends Utilisateur{
    constructor(
        public override id : number,
        public override email : string,
        public override role : string,
        public dateHeureInscription : Date,
        public lienDeParenteString : string,
        public paysString : string,
        public valide : boolean,
        public coefficient : number,
        public nom : string,
        public prenom :  string,
        public mdp : string,

    ){
        super(id, email, role);
    }
}