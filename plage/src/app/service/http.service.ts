import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';
import { File } from '../models/file';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client: HttpClient) { }

  getReservationEnAttente(): Observable<Reservation[]>{
    return this.client.get<Reservation[]>(`http://localhost:8080/api/locations_en_attente`);
  }

  getFilesInfo(dateDeb:Date, dateFin:Date): Observable<File[]>{
    console.log(`http://localhost:8080/api/files/${formatDate(dateDeb,'yyyy-MM-dd','en-US')}/${formatDate(dateFin,'yyyy-MM-dd','en-US')}`);
    return this.client.get<File[]>(`http://localhost:8080/api/files/${formatDate(dateDeb,'yyyy-MM-dd','en-US')}/${formatDate(dateFin,'yyyy-MM-dd','en-US')}`);
  }

  utilisateurConnexion(email: string, motDePasse: String): Observable<object>{
    return this.client.post(`http://localhost:8080/api/utilisateurs/connexion/${email}/${motDePasse}`,null);
  }

  locataireCreation(nom: string, prenom: string, email: string, motDePasse: string, lienDeParente: string, pays: string): Observable<object>{
    return this.client.post(`http://localhost:8080/api/utilisateurs/creationLocataire/${nom}/${prenom}${email}/${motDePasse}${lienDeParente}/${pays}`,null);
  }
}
