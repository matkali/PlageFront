
import { Utilisateur } from './utilisateur';

export class Concessionnaire extends Utilisateur{
    constructor(
        public override id : number,
        public nom : string,
        public prenom :  string,
        public override email : string,
        public mdp : string,
        public override role : string,
        public numeroDeTelephone : string
    ){
        super(id, email, role);
    }
}
    
