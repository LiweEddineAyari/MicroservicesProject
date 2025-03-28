package com.example.chambreservice.service;



import com.example.chambreservice.entity.Chambre;
import com.example.chambreservice.entity.TypeChambre;

import java.util.List;

public interface IChambreService {

    public List<Chambre> retrieveAllChambres();
    public Chambre retrieveChambre(Long chambreId);
    public Chambre addChambre(Chambre c, String token);
    public void removeChambre(Long chambreId);
    public Chambre modifyChambre(Chambre chambre);

    // Here we will add later methods calling keywords and methods calling JPQL
//    public Chambre trouverchambreSelonEtudiant(long Cin);

    public List<Chambre> recupererChambresSelonTyp(TypeChambre tc);

}
