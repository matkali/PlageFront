import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { File } from '../../models/file';
import { Parasol } from '../../models/parasol';

@Component({
  selector: 'app-plage-selector',
  templateUrl: './plage-selector.component.html',
  styleUrls: ['./plage-selector.component.css']
})
export class PlageSelectorComponent {
  files: File[] = [];
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
  }
}
