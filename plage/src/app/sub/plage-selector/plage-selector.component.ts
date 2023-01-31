import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { File } from '../../models/file';
import { Parasol } from '../../models/parasol';
import { Location } from '../../models/location';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plage-selector',
  templateUrl: './plage-selector.component.html',
  styleUrls: ['./plage-selector.component.css'],
})
export class PlageSelectorComponent {
  @Input() choisir: boolean;
  @Input() montrer: boolean;
  @Input() parasolsSelect: Parasol[];
  @Input() dateD: Date;
  @Input() dateF: Date;
  location:Location;
  idResa;
  files: File[] = [];
  constructor(private service: HttpService, private user:UserService, private router:Router,
    private route: ActivatedRoute) {
    console.log(this.parasolsSelect)
    if (this.dateD == null) {
      this.dateD = new Date();
    }
    if (this.dateF == null) {
      this.dateF = new Date();
    }
    // On récupère l'id dans le chemin -- a voir si ça marche dans tous les cas (en tant que Locataire)
    let strVal = this.route.snapshot.paramMap.get('id');
    console.log(strVal)
    if (strVal != null) {
      this.idResa = +strVal;
    }
    // On récupère la réservation et on charge les paramètres de celle-ci
    this.getLocation(this.idResa);

    // On récupère toutes les files, et à mesure on vérifie si le parasol fait partie de la location présente
    service.getFilesInfo(this.dateD, this.dateF).subscribe((files) => {
      for (let f of files) {
        for(let p of f.parasols){
          for(let pSelect of this.parasolsSelect){
            if(pSelect.numEmplacement==p.numEmplacement&&pSelect.numFile==p.numFile){
              p.select=true;
            }
          }
        }
        this.files.push(f);
      }
    });
  }
  select(parasol: Parasol) {
    if (!parasol.reserve && this.choisir) {
      this.parasolsSelect =[];
      parasol.select = !parasol.select;
      if (parasol.select) {
        this.parasolsSelect.push(parasol);
      } else {
        this.parasolsSelect = this.parasolsSelect.filter(
          (obj) =>
            obj.numEmplacement != parasol.numEmplacement ||
            obj.numFile != parasol.numFile
        );
      }
    }
  }
  ngOnInit() {
    if (
      this.user.getUser() == null ||
      this.user.getUser().role != 'concessionnaire'
    ) {
      this.router.navigate(['']);
    }
    
  }
  getLocation(idRes: number) {
    this.service.getLocation(idRes).subscribe({
      next: (a) => {(this.location = a);
        this.dateD = this.location.dateDebut;
        this.dateF = this.location.dateFin;
        this.parasolsSelect = this.location.parasols;
        console.log(this.parasolsSelect)},
      error: () => this.router.navigate(['/Concessionnaire']),
    });
  }
}
