import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Locataire } from './../../models/locataire';

@Component({
  selector: 'app-liste-locataire',
  templateUrl: './liste-locataire.component.html',
  styleUrls: ['./liste-locataire.component.css']
})
export class ListeLocataireComponent {
  locataires : Locataire[] = [];
  constructor(private service:HttpService){ 
    service.getLocataire().subscribe(locataires =>{
      for(let locataire of locataires){
        this.locataires.push(locataire);
      }});
    console.log(this.locataires);
  }
}
