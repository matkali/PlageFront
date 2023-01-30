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
    this.service.getFilesInfo(dateDeb.valueAsDate,dateFin.valueAsDate).subscribe(files =>{
      for(let f of files){
        this.files.push(f);
      }})
  }
  select(parasol: Parasol) {
    if (!parasol.reserve) {
      parasol.select = !parasol.select;
    }
  }
}
