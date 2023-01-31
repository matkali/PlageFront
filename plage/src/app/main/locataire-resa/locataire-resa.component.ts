import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Parasol } from 'src/app/models/parasol';
import { Location } from 'src/app/models/location';
import { Locataire } from 'src/app/models/locataire';
import { Utilisateur } from './../../models/utilisateur';
import { HttpService } from './../../service/http.service';

@Component({
  selector: 'app-locataire-resa',
  templateUrl: './locataire-resa.component.html',
  styleUrls: ['./locataire-resa.component.css']
})
export class LocataireResaComponent {
  constructor(private user: UserService, private router: Router, private fb: FormBuilder, private service: HttpService){
    ;
  }
  parasolTab: Parasol[]=[];
  para: Parasol;
  location: Location;
  locataire: Locataire;
  locationForm = this.fb.group({
    datedeb : Date,
    datefin : Date, 
    montantAReglerEnEuros : '',
    remarque : '',
    concessionnaire :'',
    statut : '', 
    nbParasols: 0,
    parasols : this.fb.array([
      this.fb.control('')]),
  });

  

  ngOnInit(){
    if(this.user.getUser()==null || this.user.getUser().role!='locataire'){
      this.router.navigate(['']);
    }
  }

  ajoutPara(){
    this.parasols.push(this.fb.control(''));
  }

  deletPara(){
    this.parasols.removeAt(this.parasols.length-1);
  }

  

  submit(datedeb, datefin){
    this.locationForm.controls.nbParasols.setValue(this.parasols.length);
    this.locationForm.controls.concessionnaire.setValue('Rossini');
    this.locationForm.controls.statut.setValue('En attente');
    var arrayControl = this.locationForm.get('parasols') as FormArray;
    for(let i=0; i<this.parasols.length; i++){
      const control =this.locationForm.controls.parasols.at(i).value;
      const control_number: number = +control;
      // console.log(control_number);
      let paras = new Parasol(
        -1,
        control_number,
        false,
        true,
        new Date(datedeb.valueAsDate),
        new Date(datefin.valueAsDate)
      );
      this.parasolTab.push(paras);
    }
    // this.locataire = new Utilisateur(
    //   this.user.getUser().id,
    //   this.user.getUser().email,
    //   this.user.getUser().role
    // );
    this.locataire = new Locataire(
      this.user.getUser().id,
      null,
      null,
      this.user.getUser().email,
      null,
      null,
      null,
      null,
      null,
      true,
      0
    );
    this.location = new Location(
      new Date(datedeb.valueAsDate),
      new Date(datefin.valueAsDate),
      0,
      this.locationForm.controls.remarque.getRawValue(),
      null,
      null,
      this.locationForm.controls.nbParasols.getRawValue(),
      this.parasolTab,
      this.locataire);
    let response = this.service.locationCreation(this.location);
    response.subscribe({
      next: () => this.router.navigate(['/locataire']),
      error : ()=>alert("something went wrong :!")
    })
    
  }

  get parasols(){
    return this.locationForm.get('parasols') as FormArray;
  }
  
}
