import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { File } from '../../models/file';
import { Parasol } from '../../models/parasol';
import { Location } from '../../models/location';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Statut } from 'src/app/models/statut';
import { Locataire } from 'src/app/models/locataire';

@Component({
  selector: 'app-plage-selector',
  templateUrl: './plage-selector.component.html',
  styleUrls: ['./plage-selector.component.css'],
})
export class PlageSelectorComponent {
  @Output() msgToUneResa = new EventEmitter();
  @Input() choisir: boolean;
  @Input() montrer: boolean;
  parasolsSelect: Parasol[];
  @Input() dateD: Date;
  @Input() dateF: Date;
  location: Location = new Location(
    new Date(),
    new Date(),
    0,
    '',
    null,
    new Statut(''),
    0,
    null,
    new Locataire(0,'','','','','',new Date(),'','',null,0)
  );
  idResa;
  files: File[] = [];
  constructor(private service: HttpService, private user:UserService, private router:Router,
    private route: ActivatedRoute) {
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
    service.getFilesInfo(this.location.dateDebut, this.location.dateFin).subscribe((files) => {
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
      parasol.select = !parasol.select;
      if (parasol.select) {
        this.parasolsSelect.push(parasol);
      } else {
        // Ne garder que les éléments qui sont différents de ce parasol
        this.parasolsSelect = this.parasolsSelect.filter(
          (obj) =>
          // Soit l'emplacement soit la file est différente
            obj.numEmplacement != parasol.numEmplacement ||
            obj.numFile != parasol.numFile
        );
      }
      this.msgToUneResa.emit(this.parasolsSelect);
    }
  }
  ngOnInit() {
    if (
      this.user.getUser() == null
    ) {
      this.router.navigate(['']);
    }
    
  }
  getLocation(idRes: number) {
    this.service.getLocation(idRes).subscribe({
      next: (a) => {this.location = a;
        this.dateD = this.location.dateDebut;
        this.dateF = this.location.dateFin;
        console.log(this.location);
        if(this.location.statut.nom == "En attente"){
          this.parasolsSelect =[];
          console.log(this.parasolsSelect)
        } else {
          this.parasolsSelect = this.location.parasols;
        }
        console.log(this.parasolsSelect)},
      error: () => this.router.navigate(['/Concessionnaire']),
    });
  }
}
