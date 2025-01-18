import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-reservation-list',
  standalone: false,
  
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{

  reservations : Reservation[] = []

  constructor(private reservationService: ReservationService){

  }

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations()
  }

  deleteReservation(id: string): void{
    this.reservationService.deleteReservation(id);
  }

}
