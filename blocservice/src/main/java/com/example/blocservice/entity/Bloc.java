package com.example.blocservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;



@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Bloc {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idBloc;

    String nomBloc;
    long capaciteBloc;
    Long idFoyer;

    public Long getIdFoyer() {
        return idFoyer;
    }

    public Bloc setIdFoyer(Long idFoyer) {
        this.idFoyer = idFoyer;
        return this;
    }

    public long getIdBloc() {
        return idBloc;
    }

    public Bloc setIdBloc(long idBloc) {
        this.idBloc = idBloc;
        return this;
    }

    public String getNomBloc() {
        return nomBloc;
    }

    public Bloc setNomBloc(String nomBloc) {
        this.nomBloc = nomBloc;
        return this;
    }

    public long getCapaciteBloc() {
        return capaciteBloc;
    }

    public Bloc setCapaciteBloc(long capaciteBloc) {
        this.capaciteBloc = capaciteBloc;
        return this;
    }
    //    @ManyToOne(cascade = CascadeType.ALL)
//    Foyer foyer;
//
//    @OneToMany(mappedBy = "bloc")
//    @JsonIgnore
//    @ToString.Exclude
//    Set<Chambre> chambres = new HashSet<Chambre>();

}

