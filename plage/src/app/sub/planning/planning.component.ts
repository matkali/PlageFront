import { Component } from '@angular/core';
import { Parasol } from '../../models/parasol';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
})
export class PlanningComponent {
  files:any[];
  constructor() {
    var file1 = [];
    var file2 = [];
    var file3 = [];
    for (let i = 0; i < 10; i++) {
      file1.push(new Parasol(i,1,false, false));
      file2.push(new Parasol(i,2,false, false));
      file3.push(new Parasol(i,3,true, false));
    }
    this.files=[file1,file2,file3];
  }
  select(parasol:Parasol){
    if(!parasol.reserve){
      parasol.select = !parasol.select;
    }
  }
}
