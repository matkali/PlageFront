import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { UserService } from './../../service/user.service';
import { Locataire } from 'src/app/models/locataire';
import { LocalDate } from 'local-date';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  constructor(private service:HttpService, private user:UserService, private router:Router){};

  
  
  creerClient(nom, prenom, email, pays, lienDeParente, mdp){
    let ajd = new Date();
    let ajdLocale = ajd.toLocaleString();
    console.log(ajd);
    let locCree = new Locataire(
      null,
      email.value,
      'locataire',
      ajdLocale,
      lienDeParente.value,
      pays.value,
      true,
      0,
      nom.value,
      prenom.value,
      mdp.value);
      console.log(locCree);
      let response = this.service.locataireCreation(locCree);
      response.subscribe({
        next: () => this.router.navigate(['']),
        error : ()=>alert("something went wrong :!")
      })
  }
}
