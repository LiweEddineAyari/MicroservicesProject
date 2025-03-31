package com.example.reservation.service;


import com.example.reservation.entity.Reservation;

import java.util.Date;
import java.util.List;

public interface IReservationService {

    public List<Reservation> retrieveAllReservations();
    public Reservation retrieveReservation(String reservationId);
    public Reservation addReservation(Reservation r,String token);
    public void removeReservation(String reservationId);
    public Reservation modifyReservation(Reservation reservation);

*//jareb belwahda belwahda
}
