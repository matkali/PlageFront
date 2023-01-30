import { Component, Input } from '@angular/core';
import { Locataire } from './../../models/locataire';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-item-locataire',
  templateUrl: './item-locataire.component.html',
  styleUrls: ['./item-locataire.component.css'],
})
export class ItemLocataireComponent {
  @Input() locataire: Locataire;
  date: string;
  ngOnInit() {
    console.log(this.locataire);
    this.date = formatDate(
      this.locataire.dateHeureInscription,
      'yyyy-MM-dd',
      'en-US'
    );
  }

  supprime(){}
}
