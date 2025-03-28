package com.example.reservation.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.Set;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long  idReservation;

    Long idChmabre;
    Date anneeUniversitaire;
    boolean estValide;

    public Long getIdChmabre() {
        return idChmabre;
    }

    public Reservation setIdChmabre(Long idChmabre) {
        this.idChmabre = idChmabre;
        return this;
    }

    public Long getIdReservation() {
        return idReservation;
    }

    public Reservation setIdReservation(Long idReservation) {
        this.idReservation = idReservation;
        return this;
    }


    public Date getAnneeUniversitaire() {
        return anneeUniversitaire;
    }

    public Reservation setAnneeUniversitaire(Date anneeUniversitaire) {
        this.anneeUniversitaire = anneeUniversitaire;
        return this;
    }

    public boolean getEstValide() {
        return estValide;
    }

    public Reservation setEstValide(boolean estValide) {
        this.estValide = estValide;
        return this;
    }

/*@ToString.Exclude
    @JsonIgnore*/

}


