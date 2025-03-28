package com.example.reservation.service;


import com.example.reservation.entity.Reservation;
import com.example.reservation.repository.ReservationRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class ReservationServiceImpl implements IReservationService {
    @Autowired
    ReservationRepository reservationRepository;

    public List<Reservation> retrieveAllReservations() {
        return reservationRepository.findAll();
    }

    public Reservation retrieveReservation(String reservationId) {
        return reservationRepository.findById(reservationId).get();
    }
    @Autowired
    private WebClient.Builder webClientBuilder;


    public Reservation addReservation(Reservation r,String token) {
        Long Idchambre = r.getIdChmabre();

        Boolean foyerExists = webClientBuilder.build()
                .get()
                .uri("http://chambreservice:8085/chambre/exists/{Idchambre}", Idchambre)
                .header("Authorization", token)
                .retrieve()
                .bodyToMono(Boolean.class)
                .block();

        if (Boolean.TRUE.equals(foyerExists)) {
            return reservationRepository.save(r);
        } else {
            throw new RuntimeException("chambre avec ID " + Idchambre + " n'existe pas !");
        }

    }

    public Reservation modifyReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

//    public List<Reservation> trouverResSelonDateEtStatus(Date d, boolean b) {
//        return reservationRepository.findAllByAnneeUniversitaireBeforeAndEstValide(d, b);
//    }

    public void removeReservation(String reservationId) {
        reservationRepository.deleteById(reservationId);
    }
}
