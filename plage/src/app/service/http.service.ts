import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location';
import { File } from '../models/file';
import { formatDate } from '@angular/common';
import { Locataire } from './../models/locataire';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client: HttpClient) { }

  getLocationEnAttente(): Observable<Location[]>{
    return this.client.get<Location[]>(`http://localhost:8080/api/locations_en_attente`);
  }

  getFilesInfo(dateDeb:Date, dateFin:Date): Observable<File[]>{
    return this.client.get<File[]>(`http://localhost:8080/api/files/${formatDate(dateDeb,'yyyy-MM-dd','en-US')}/${formatDate(dateFin,'yyyy-MM-dd','en-US')}`);
  }

  getLocation(): Observable<Location[]>{
    return this.client.get<Location[]>(`http://localhost:8080/api/locations`);
  }

  getLocataire(): Observable<Locataire[]>{
    return this.client.get<Locataire[]>(`http://localhost:8080/api/locataires`);
  }

  utilisateurConnexion(email: string, motDePasse: String): Observable<object>{
    return this.client.post(`http://localhost:8080/api/utilisateurs/connexion/${email}/${motDePasse}`,null);
  }

  locataireCreation(nom: string, prenom: string, email: string, motDePasse: string, lienDeParente: string, pays: string): Observable<object>{
    return this.client.post(`http://localhost:8080/api/utilisateurs/creationLocataire/${nom}/${prenom}${email}/${motDePasse}${lienDeParente}/${pays}`,null);
  }
}
