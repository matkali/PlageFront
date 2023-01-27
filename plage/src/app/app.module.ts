import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanningComponent } from './sub/planning/planning.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { InscriptionComponent } from './main/inscription/inscription.component';
import { NavbarComponent } from './sub/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocataireComponent } from './main/locataire/locataire.component';
import { LocataireResaComponent } from './main/locataire-resa/locataire-resa.component';
import { ConcessionnaireComponent } from './main/concessionnaire/concessionnaire.component';
import { LocataireVoirComponent } from './main/locataire-voir/locataire-voir.component';
import { ConcessionnaireResaComponent } from './main/concessionnaire-resa/concessionnaire-resa.component';
import { ConcessionnaireResaTraiterComponent } from './main/concessionnaire-resa-traiter/concessionnaire-resa-traiter.component';
import { ConcessionnaireClientsComponent } from './main/concessionnaire-clients/concessionnaire-clients.component';
import { ConcessionnaireUneResaComponent } from './main/concessionnaire-une-resa/concessionnaire-une-resa.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    AccueilComponent,
    InscriptionComponent,
    NavbarComponent,
    LocataireComponent,
    LocataireResaComponent,
    ConcessionnaireComponent,
    LocataireVoirComponent,
    ConcessionnaireResaComponent,
    ConcessionnaireResaTraiterComponent,
    ConcessionnaireClientsComponent,
    ConcessionnaireUneResaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
