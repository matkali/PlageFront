import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client: HttpClient) { }

  getReservationEnAttente(): Observable<Reservation[]>{
    return this.client.get<Reservation[]>(`http://localhost:8080/api/locations_en_attente`);
  }
}
