import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-locataire-resa',
  templateUrl: './locataire-resa.component.html',
  styleUrls: ['./locataire-resa.component.css']
})
export class LocataireResaComponent {

  constructor(private service: HttpService, private user: UserService, private router: Router){}
  nbParasol=[1];

  ngOnInit(){
    this.nbParasol=[1];
    if(this.user.getUser()==null || this.user.getUser().role!='locataire'){
      this.router.navigate(['']);
    }
  }

  ajoutPara(){
    this.nbParasol.push(this.nbParasol.length+1);
  }
  
}
