import { LienDeParente } from './lienDeParente';
import { Utilisateur } from './utilisateur';
import { Pays } from './pays';

export class Locataire extends Utilisateur{
    constructor(
        public override id : number,
        public override email : string,
        public override role : string,
        public dateHeure : Date,
        public lienDeParente : LienDeParente,
        public pays : Pays,
        public valide : boolean,
    ){
        super(id, email, role);
    }
}