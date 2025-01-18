import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations:Reservation[] = []

  constructor(){
    let savedReservations= localStorage.getItem("reservations")
    this.reservations = savedReservations?JSON.parse(savedReservations) : []
  }

  //CRUD operations
  getReservations(): Reservation[]{
    return this.reservations
  }

  getReservation(id:string): Reservation | undefined{
    return this.reservations.find(res=> res.id === id)
  }

  addReservation(reservation: Reservation): void{
    reservation.id = Date.now().toString()
    this.reservations.push(reservation)
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res=> res.id === id)
    this.reservations.splice(index,1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  updateReservation(id:string, updatedReservation: Reservation): void{
    updatedReservation.id = id
    let index = this.reservations.findIndex(res=> updatedReservation.id === id)
    this.reservations[index] = updatedReservation
    localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }
}
