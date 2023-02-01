import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Location } from './../../models/location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-reservation',
  templateUrl: './item-reservation.component.html',
  styleUrls: ['./item-reservation.component.css']
})
export class ItemReservationComponent {
  @Input() location: Location;
  @Input() viewLocataire : boolean;
  datedeb: string;
  datefin:string;
  constructor(private router: Router){}
  ngOnInit() {
    this.datedeb = formatDate(
      this.location.dateDebut,
      'yyyy-MM-dd',
      'en-US'
    );
    this.datefin = formatDate(
      this.location.dateFin,
      'yyyy-MM-dd',
      'en-US'
    );
  }
  voirDetails(){
    this.router.navigate(['locataire/'+this.location.id])
  }
  gererDetails(){
    this.router.navigate(['concessionnaire/'+this.location.id])
  }
}

