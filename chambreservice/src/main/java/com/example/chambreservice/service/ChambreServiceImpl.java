package com.example.chambreservice.service;


import com.example.chambreservice.entity.Chambre;
import com.example.chambreservice.entity.TypeChambre;
import com.example.chambreservice.repository.ChambreRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class ChambreServiceImpl implements IChambreService {
   @Autowired
   ChambreRepository chambreRepository;

    public List<Chambre> retrieveAllChambres() {
        System.out.println("In Methodo retrieveAllChambres : ");
        List<Chambre> listC = chambreRepository.findAll();
        System.out.println("Out of retrieveAllChambres : ");

        return listC;
    }

    public Chambre retrieveChambre(Long chambreId) {
        Chambre c = chambreRepository.findById(chambreId).get();
        return c;
    }
    @Autowired
    private WebClient.Builder webClientBuilder;


    public Chambre addChambre(Chambre c, String token) {
        Long IdBloc = c.getIdBloc();

        Boolean foyerExists = webClientBuilder.build()
                .get()
                .uri("http://blocservice:8083/bloc/exists/{IdBloc}", IdBloc)
                .header("Authorization", token)
                .retrieve()
                .bodyToMono(Boolean.class)
                .block();

        if (Boolean.TRUE.equals(foyerExists)) {
            return chambreRepository.save(c);
        } else {
            throw new RuntimeException("block avec ID " + IdBloc + " n'existe pas !");
        }
    }





    public Chambre modifyChambre(Chambre c) {
        Chambre chambre = chambreRepository.save(c);
        return c;
    }

    public void removeChambre(Long chambreId) {
        chambreRepository.deleteById(chambreId);
    }







    public List<Chambre> recupererChambresSelonTyp(TypeChambre tc)
    {
        return chambreRepository.findAllByTypeC(tc);
    }






















//    public Chambre trouverchambreSelonEtudiant(long cin) {
//       //
//
//        return chambreRepository.trouverChselonEt(cin);
//    }
}
