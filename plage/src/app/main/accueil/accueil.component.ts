import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  date;
  constructor(private service:HttpService) { }

  getReservationsEnAttente(){
    this.service.getReservationEnAttente().subscribe(reservations =>{
      for(let r of reservations){
        console.log(r);
        this.date=r.dateHeureDebut;
      }
    })
  }

}
