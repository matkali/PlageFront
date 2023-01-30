import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location';
import { File } from '../models/file';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client: HttpClient) { }

  getReservationEnAttente(): Observable<Location[]>{
    return this.client.get<Location[]>(`http://localhost:8080/api/locations_en_attente`);
  }

  getFilesInfo(dateDeb:Date, dateFin:Date): Observable<File[]>{
    return this.client.get<File[]>(`http://localhost:8080/api/files/${formatDate(dateDeb,'yyyy-MM-dd','en-US')}/${formatDate(dateFin,'yyyy-MM-dd','en-US')}`);
  }

  getReservation(): Observable<Location[]>{
    return this.client.get<Location[]>(`http://localhost:8080/api/locations`);
  }
}
