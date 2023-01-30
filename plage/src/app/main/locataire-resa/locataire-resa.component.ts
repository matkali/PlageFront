import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-locataire-resa',
  templateUrl: './locataire-resa.component.html',
  styleUrls: ['./locataire-resa.component.css']
})
export class LocataireResaComponent {
  constructor(private user: UserService, private router: Router, private fb: FormBuilder){
    ;
  }
  locationForm = this.fb.group({
    datedeb : '',
    datefin : '', 
    montantAReglerEnEuros : '',
    remarque : '',
    concessionnaire :'',
    statut : '', 
    nbParasols: null,
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

  submit(){
    this.locationForm.controls.nbParasols.setValue(this.parasols.length);
    this.locationForm.controls.concessionnaire.setValue('Rossini');
    this.locationForm.controls.statut.setValue('En attente');
    console.log(this.locationForm.controls.remarque.getRawValue());
    console.log(this.locationForm.value);
    
  }

  get parasols(){
    return this.locationForm.get('parasols') as FormArray;
  }
  
}
