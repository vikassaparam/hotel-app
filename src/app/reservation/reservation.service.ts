import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HtmlParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = "http://localhost:3000"
  private reservations:Reservation[] = []

  // commented to use mock API
  // constructor(){
  //   let savedReservations= localStorage.getItem("reservations")
  //   this.reservations = savedReservations?JSON.parse(savedReservations) : []
  // }

  constructor(private httpClient: HttpClient){

  }

  //CRUD operations - using Mockoon Mock API
  getReservations(): Observable<Reservation[]>{
    // return this.reservations
    return this.httpClient.get<Reservation[]>(this.apiUrl + "/reservations")
  }

  getReservation(id:string): Observable<Reservation>{
    // return this.reservations.find(res=> res.id === id)
    return this.httpClient.get<Reservation>(this.apiUrl + "/reservation/" + id)
  }

  addReservation(reservation: Reservation): Observable<void>{
    // reservation.id = Date.now().toString()
    // this.reservations.push(reservation)
    // localStorage.setItem("reservations", JSON.stringify(this.reservations))
    return this.httpClient.post<void>(this.apiUrl + "/reservation/", reservation)
  }

  deleteReservation(id: string): Observable<void>{
    // let index = this.reservations.findIndex(res=> res.id === id)
    // this.reservations.splice(index,1)
    // localStorage.setItem("reservations", JSON.stringify(this.reservations))
    return this.httpClient.delete<void>(this.apiUrl + "/reservation/" + id)
  }

  updateReservation(id:string, updatedReservation: Reservation): Observable<void>{
    return this.httpClient.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation)
  }
}
