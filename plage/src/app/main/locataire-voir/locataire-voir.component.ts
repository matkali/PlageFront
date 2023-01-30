import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-locataire-voir',
  templateUrl: './locataire-voir.component.html',
  styleUrls: ['./locataire-voir.component.css']
})
export class LocataireVoirComponent {
  constructor(private service: HttpService, private user: UserService, private router: Router){}

  ngOnInit(){
    if(this.user.getUser()==null || this.user.getUser().role!='locataire'){
      this.router.navigate(['']);
    }
  }
}
