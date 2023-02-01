import { Component } from '@angular/core';
import { Parasol } from '../../models/parasol';
import { File } from '../../models/file';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
})
export class PlanningComponent {
  files: File[] = [];
  constructor(private service:HttpService){
    service.getFilesInfo(new Date(),new Date()).subscribe(files =>{
      for(let f of files){
        this.files.push(f);
      }})
  }
  actualiser(dateDeb:HTMLInputElement,dateFin:HTMLInputElement){
    this.files=[];
    let dateD = dateDeb.valueAsDate;
    let dateF = dateFin.valueAsDate;
    if (dateD == null) {
      dateD = dateF;
    }
    if (dateF == null) {
      dateF = dateD;
    }
    if (new Date(dateD).getTime() - new Date(dateF).getTime() > 0) {
      let date = dateD;
      dateD = dateF;
      dateF = date;
    }
    this.service.getFilesInfo(dateD,dateF).subscribe(files =>{
      for(let f of files){
        this.files.push(f);
      }})
  }
 
}
