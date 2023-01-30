import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from './../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locataire',
  templateUrl: './locataire.component.html',
  styleUrls: ['./locataire.component.css']
})
export class LocataireComponent {
  constructor(private service: HttpService, private user: UserService, private router: Router){}

  ngOnInit(){
    if(this.user.getUser()==null || this.user.getUser().role!='locataire'){
      this.router.navigate(['']);
    }
  }
}
