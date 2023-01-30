import { Component } from '@angular/core';
import { HttpService } from './../../service/http.service';
import { UserService } from './../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarconcessionnaire',
  templateUrl: './navbarconcessionnaire.component.html',
  styleUrls: ['./navbarconcessionnaire.component.css']
})
export class NavbarconcessionnaireComponent {

  constructor(private service:HttpService, private user:UserService, private router: Router){};

  deco(){
    this.user.deconnexion();
  }
}
