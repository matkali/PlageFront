import { Parasol } from './parasol';

export class File {
    constructor(
        public num : number,
        public chemin : number,
        public parasols : Parasol[],
        public prixJournalier : number,
        public dateDeb : Date,
        public dateFin : Date,
    ){}
}