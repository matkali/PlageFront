import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from 'src/app/service/user.service';
import { Location } from 'src/app/models/location';
import { Concessionnaire } from './../../models/concessionnaire';
import { Statut } from 'src/app/models/statut';
import { Locataire } from 'src/app/models/locataire';
import { Parasol } from 'src/app/models/parasol';

@Component({
  selector: 'app-concessionnaire-une-resa',
  templateUrl: './concessionnaire-une-resa.component.html',
  styleUrls: ['./concessionnaire-une-resa.component.css'],
})
export class ConcessionnaireUneResaComponent {
  constructor(
    private service: HttpService,
    private user: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  paras: Parasol[]=[];
  idResa: number = 0;
  fileTab: any[]=[0,0,0,0,0,0,0,0];
  location: Location = new Location(
    new Date(),
    new Date(),
    0,
    '',
    null,
    new Statut(''),
    0,
    null,
    new Locataire(0,'','','','','',new Date(),'','',null,0)
  );
  ngOnInit() {
    if (
      this.user.getUser() == null ||
      this.user.getUser().role != 'concessionnaire'
    ) {
      this.router.navigate(['']);
    }
    let strVal = this.route.snapshot.paramMap.get('id');

    if (strVal != null) {
      this.idResa = +strVal;
    }
    this.getLocation(this.idResa);
    
  }

  getLocation(idRes: number) {
    this.service.getLocation(idRes).subscribe({
      next: (a) => (this.location = a,
        this.tabConstruct()),
      error: () => this.router.navigate(['/Concessionnaire']),
    });
  }

  enAttente(){
    this.service.changerStatut(this.idResa, 'En attente').subscribe({
      next: () => (
        window.location.reload()
      ),
      error: ()=> alert("something went wrong :!")
    })
  }

  tabConstruct(){
    for(let i=0; i<this.fileTab.length;i++){
      for(let para of this.location.parasols){
        if(para.numFile==i+1){
          this.fileTab[i]+=1;
        }
      }
    }
  }

  rejeter(){
    this.service.changerStatut(this.idResa, 'Refusée').subscribe({
      next: () => (
        window.location.reload()
      ),
      error: ()=> alert("something went wrong :!")
    })
  }

  valider(){
    for( let par of this.paras){
      par.reserve=true;
    }
    this.location.parasols=this.paras;
    this.service.changerStatut(this.idResa, 'Acceptée').subscribe({
      next: () => (
        window.location.reload()
      ),
      error: ()=> alert("something went wrong :!")
    })
    let response = this.service.validationLocation(this.location);
    response.subscribe({
      next: () => (
        window.location.reload()
      ),
      error : ()=>alert("something went wrong :!")
    })
  }

  traitementPara(parasTab: Parasol[]){
    this.paras=parasTab;
    
  }
}
