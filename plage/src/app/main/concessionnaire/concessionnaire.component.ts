import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-concessionnaire',
  templateUrl: './concessionnaire.component.html',
  styleUrls: ['./concessionnaire.component.css']
})
export class ConcessionnaireComponent {
  constructor(private service: HttpService, private user: UserService, private router: Router){}

  ngOnInit(){
    if(this.user.getUser()==null || this.user.getUser().role!='concessionnaire'){
      this.router.navigate(['']);
    }
  }
}
