import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbarclient',
  templateUrl: './navbarclient.component.html',
  styleUrls: ['./navbarclient.component.css']
})
export class NavbarclientComponent {
  constructor(private service:HttpService, private user:UserService, private router: Router){};

  deco(){
    this.user.deconnexion();
  }
}
