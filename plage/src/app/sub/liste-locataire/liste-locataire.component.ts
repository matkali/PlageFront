import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Locataire } from './../../models/locataire';

@Component({
  selector: 'app-liste-locataire',
  templateUrl: './liste-locataire.component.html',
  styleUrls: ['./liste-locataire.component.css'],
})
export class ListeLocataireComponent {
  locataires: Locataire[] = [];
  constructor(private service: HttpService) {}
  ngOnInit(): void {
    this.service.getLocataire().subscribe((locataires) => {
      for (let locataire of locataires) {
        this.locataires.push(locataire);
      }
    });
  }
  trierValide() {
    this.locataires.sort((a, b) => this.ordreValide(a, b));
  }
  ordreValide(a: Locataire, b: Locataire): number {
    if (a.valide) {
      return -1;
    }
    if (b.valide) {
      return 1;
    }
    return 0;
  }
  trierParents() {
    this.locataires.sort((a, b) => 4*(a.coefficient-b.coefficient));
  }
  trierDate(){
    this.locataires.sort((a,b) => new Date(a.dateHeureInscription).getTime() - new Date(b.dateHeureInscription).getTime());
  }
}
