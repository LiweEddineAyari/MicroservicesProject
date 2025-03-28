package com.example.chambreservice.entity;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Chambre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idChambre;

    long numeroChambre;
    Long idBloc;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    TypeChambre typeC;

    public Long getIdBloc() {
        return idBloc;
    }

    public Chambre setIdBloc(Long idBloc) {
        this.idBloc = idBloc;
        return this;
    }

    public long getIdChambre() {
        return idChambre;
    }

    public Chambre setIdChambre(long idChambre) {
        this.idChambre = idChambre;
        return this;
    }

    public long getNumeroChambre() {
        return numeroChambre;
    }

    public Chambre setNumeroChambre(long numeroChambre) {
        this.numeroChambre = numeroChambre;
        return this;
    }

    public TypeChambre getTypeC() {
        return typeC;
    }

    public Chambre setTypeC(TypeChambre typeC) {
        this.typeC = typeC;
        return this;
    }
}
