import { Component } from '@angular/core';

@Component({
  selector: 'app-locataire-resa',
  templateUrl: './locataire-resa.component.html',
  styleUrls: ['./locataire-resa.component.css']
})
export class LocataireResaComponent {
  nbParasol=[1];

  ngOnInit(){
    this.nbParasol=[1];
  }

  ajoutPara(){
    this.nbParasol.push(this.nbParasol.length+1);
  }
}
