package com.example.chambreservice.control;

import com.example.chambreservice.entity.Chambre;
import com.example.chambreservice.entity.TypeChambre;
import com.example.chambreservice.repository.ChambreRepository;
import com.example.chambreservice.service.IChambreService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("/chambre")
public class ChambreRestController {
    @Autowired
    IChambreService chambreService;
    @Autowired
    private ChambreRepository chambreRepository;

    // http://localhost:8089/tpfoyer/chambre/retrieve-all-chambres
     @GetMapping("/retrieve-all-chambres")
    public List<Chambre> getChambres() {
        List<Chambre> listChambres = chambreService.retrieveAllChambres();
        return listChambres;
    }



    @GetMapping("/retrieve-chambre/{chambre-id}")
    public Chambre retrieveChambre(@PathVariable("chambre-id") Long chId) {
        Chambre chambre = chambreService.retrieveChambre(chId);
        return chambre;
    }

    // http://localhost:8089/tpfoyer/chambre/add-chambre
    @PostMapping("/add-chambre")
    public Chambre addChambre(@RequestBody Chambre c, @RequestHeader("Authorization") String token) {
        Chambre chambre = chambreService.addChambre(c,token);
        return chambre;
    }

    @GetMapping("/exists/{id}")
    public ResponseEntity<Boolean> checkExists(@PathVariable Long id) {
        boolean exists = chambreRepository.existsById(id);
        return ResponseEntity.ok(exists);
    }


    // http://localhost:8089/tpfoyer/chambre/remove-chambre/{chambre-id}
    @DeleteMapping("/remove-chambre/{chambre-id}")
    public void removeChambre(@PathVariable("chambre-id") Long chId) {
        chambreService.removeChambre(chId);
    }

    // http://localhost:8089/tpfoyer/chambre/modify-chambre
    @PutMapping("/modify-chambre")
    public Chambre modifyChambre(@RequestBody Chambre c) {
        Chambre chambre = chambreService.modifyChambre(c);
        return chambre;
    }


    @GetMapping("/trouver-chambres-selon-typ/{tc}")
    public List<Chambre> trouverChSelonTC(@PathVariable("tc") TypeChambre tc)
    {
        return chambreService.recupererChambresSelonTyp(tc);
    }

















    // http://localhost:8089/tpfoyer/chambre/retrieve-chambre/8
//    @GetMapping("/trouver-chambre-selon-etudiant/{cin}")
//    public Chambre trouverChSelonEt(@PathVariable("cin") long cin) {
//        Chambre chambre = chambreService.trouverchambreSelonEtudiant(cin);
//        return chambre;
//    }


}
