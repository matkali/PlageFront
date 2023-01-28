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
    // var file1 = [];
    // var file2 = [];
    // var file3 = [];
    // for (let i = 0; i < 10; i++) {
    //   file1.push(new Parasol(i, 1, false, false, new Date(), new Date()));
    //   file2.push(new Parasol(i, 2, false, false, new Date(), new Date()));
    //   file3.push(new Parasol(i, 3, true, false, new Date(), new Date()));
    // }
    // this.files = [
    //   new File(1, 4, file1, 2, new Date(), new Date()),
    //   new File(2, 4, file2, 2, new Date(), new Date()),
    //   new File(3, 4, file3, 2, new Date(), new Date()),
    // ];
    service.getFilesInfo(new Date(2023,1,2),new Date(2023,1,4)).subscribe(files =>{
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
