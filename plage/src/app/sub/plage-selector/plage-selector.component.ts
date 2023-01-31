import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { File } from '../../models/file';
import { Parasol } from '../../models/parasol';

@Component({
  selector: 'app-plage-selector',
  templateUrl: './plage-selector.component.html',
  styleUrls: ['./plage-selector.component.css']
})
export class PlageSelectorComponent {
  @Output() msgToResa = new EventEmitter();
  files: File[] = [];
  paras: Parasol[] = [];
  constructor(private service:HttpService){
    service.getFilesInfo(new Date(),new Date()).subscribe(files =>{
      for(let f of files){
        this.files.push(f);
      }})
  }
  select(parasol: Parasol) {
    if (!parasol.reserve) {
      parasol.select = !parasol.select;
    }
    if(parasol.select){
      this.paras.push(parasol);
    } else {
      for(let i=0; i<this.paras.length;i++){
        if(parasol==this.paras[i]){
          this.paras.splice(i,1);
        }
      }
    }
    this.msgToResa.emit(this.paras);
  }
}
