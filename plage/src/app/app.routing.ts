
import { AppComponent } from './app.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { Component } from '@angular/core';
import { LocataireComponent } from './main/locataire/locataire.component';
import { LocataireResaComponent } from './main/locataire-resa/locataire-resa.component';
import { LocataireVoirComponent } from './main/locataire-voir/locataire-voir.component';
import { ConcessionnaireComponent } from './main/concessionnaire/concessionnaire.component';
import { ConcessionnaireResaComponent } from './main/concessionnaire-resa/concessionnaire-resa.component';
import { ConcessionnaireClientsComponent } from './main/concessionnaire-clients/concessionnaire-clients.component';
import { ConcessionnaireUneResaComponent } from './main/concessionnaire-une-resa/concessionnaire-une-resa.component';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './main/inscription/inscription.component';

const myRoutes: Routes = [
    {path:'', component: AccueilComponent},
    {path:'inscription', component: InscriptionComponent},
    {path:'locataire', children:[
        {path:'', component: LocataireComponent},
        {path:'resa', component: LocataireResaComponent},
        {path:'voir', component: LocataireVoirComponent}
    ],},
    {path:'concessionnaire', children:[
        {path:'', component: ConcessionnaireComponent},
        {path:'resa', component: ConcessionnaireResaComponent},
        {path:'clients', component: ConcessionnaireClientsComponent},
        {path:':id', component: ConcessionnaireUneResaComponent}
    ],},
];

export const ORSYS_ROUTING = RouterModule.forRoot(myRoutes);