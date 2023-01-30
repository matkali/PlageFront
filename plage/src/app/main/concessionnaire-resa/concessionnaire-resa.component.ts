import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-concessionnaire-resa',
  templateUrl: './concessionnaire-resa.component.html',
  styleUrls: ['./concessionnaire-resa.component.css']
})
export class ConcessionnaireResaComponent {
  constructor(private service: HttpService, private user: UserService, private router: Router){}

  ngOnInit(){
    if(this.user.getUser()==null || this.user.getUser().role!='concessionnaire'){
      this.router.navigate(['']);
    }
  }
}
