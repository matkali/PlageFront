import { Utilisateur } from './utilisateur';

export class Locataire extends Utilisateur{
    constructor(
        public override id : number,
        public override email : string,
        public override role : string,
        public dateHeure : Date,
        public lienDeParente : string,
        public pays : string,
        public valide : boolean,
        public coef : number,

    ){
        super(id, email, role);
    }
}