import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from 'src/app/service/user.service';
import { Utilisateur } from './../../models/utilisateur';
import { Concessionnaire } from './../../models/concessionnaire';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  date;
  constructor(private service:HttpService, private user:UserService, private router:Router) { }

  connexion(email: HTMLInputElement, mdp: HTMLInputElement): boolean {
    this.service.utilisateurConnexion(email.value, mdp.value).subscribe({
      next: (u)=>{
        let id;
        let mail;
        let role;
        for(const [key, value] of Object.entries(u)){
          if (key == "id"){
            id = value;
          } else if (key == "email"){
            mail = value; 
          } else {
            role = value;
          }
        }
        let utilisateur = new Utilisateur(id, mail, role);
        this.user.setUser(utilisateur);
        if(this.user.getUser()?.role == 'locataire'){
          this.router.navigate(['/locataire']);
        } else if (this.user.getUser()?.role == 'concessionnaire'){
          this.router.navigate(['/concessionnaire']);
        }
      },
        error: ()=>alert("Identifiants invalides")
    });

    return false;
  }

  ngOnInit(){

    if(this.user.getUser!=null && this.user.getUser().role=='locataire'){
      this.router.navigate(['/locataire']);
    } else if (this.user.getUser!=null && this.user.getUser().role=='Concessionnaire'){
      this.router.navigate(['/concessionnaire']);
    }
  }

}
