import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Location } from '../../models/location';
import { Statut } from './../../models/statut';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css'],
})
export class ListeReservationComponent {
  @Input() id :  number;
  locations: Location[] = [];
  constructor(private service: HttpService) {}
  ngOnInit(): void {
    if(this.id !=null){
    this.service.getMesLocations(this.id).subscribe((locations) => {
      for (let location of locations) {
        this.locations.push(location);
        console.log(location);
      }
      this.triDu();
    });
    }else {
    this.service.getLocations().subscribe((locations) => {
      for (let location of locations) {
        this.locations.push(location);
      }
      this.triStatut();
    });}
  }
  triMontant(){
    this.locations.sort((a,b)=>-a.montantAReglerEnEuros+b.montantAReglerEnEuros)
  }
  triDu(){
    this.locations.sort((a,b)=>new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime());
  }
  triAu(){
    this.locations.sort((a,b)=>new Date(a.dateFin).getTime() - new Date(b.dateFin).getTime());
  }
  triNb(){
    this.locations.sort((a,b)=>-a.nbParasols+b.nbParasols)
  }
  triStatut(){
    this.locations.sort((a,b)=>-this.valeurStatut(a.statut)+this.valeurStatut(b.statut))
  }
  valeurStatut(statut:Statut): number{
    if(statut.nom=="En attente"){
      return 3
    }
    else if(statut.nom=="Refusée"){
      return 1
    } else {return 2}
  }
}
