import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation.model';
import { ReservationService } from '../services/reservation.service';
import { Chambre } from '../model/chambre.model';
import { ChambreService } from '../services/chambre.service';

@Component({
  selector: 'app-reservationcontroler',
  templateUrl: './reservation-controller.component.html'
})
export class ReservationControllerComponent implements OnInit {
  reservations: Reservation[] = [];
  selectedReservation: Reservation = {} as Reservation;
  showForm = false;
  isEditing = false;
  chambres: Chambre[] = [];

  constructor(
    private reservationService: ReservationService,
    private chambreService: ChambreService
  ) {}

  ngOnInit(): void {
    this.loadReservations();
    this.loadChambres();
  }

  loadReservations(): void {
    this.reservationService.getAllReservations().subscribe(data => {
      this.reservations = data;
    });
  }

  loadChambres(): void {
    this.chambreService.getAllChambres().subscribe({
      next: (data) => this.chambres = data,
      error: (err) => console.error('Error loading chambres:', err)
    });
  }

  addReservation(): void {
    this.reservationService.addReservation(this.selectedReservation).subscribe(() => {
      this.loadReservations();
      this.resetForm();
    });
  }

  updateReservation(): void {
    if (this.selectedReservation.idReservation) {
      this.reservationService.updateReservation(this.selectedReservation).subscribe(() => {
        this.loadReservations();
        this.resetForm();
      });
    }
  }

  deleteReservation(id: string): void {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.loadReservations();
    });
  }

  editReservation(reservation: Reservation): void {
    this.selectedReservation = { ...reservation };
    this.showForm = true;
    this.isEditing = true;
  }

  submitForm(): void {
    if (this.isEditing) {
      this.updateReservation();
    } else {
      this.addReservation();
    }
  }

  resetForm(): void {
    this.selectedReservation = {} as Reservation;
    this.showForm = false;
    this.isEditing = false;
  }
}