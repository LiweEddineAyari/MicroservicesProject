package com.example.blocservice.control;



import com.example.blocservice.entity.Bloc;
import com.example.blocservice.repository.BlocRepository;
import com.example.blocservice.service.IBlocService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

//@Tag(name = "Gestion Bloc pour l'équipe 4DS9")
@RestController
@AllArgsConstructor
@RequestMapping("/bloc")
public class BlocRestController {

    @Autowired
    IBlocService blocService;
    @Autowired
    BlocRepository blocRepository;

    //http://localhost:8089/tpfoyer/bloc/retrieve-all-blocs

    @GetMapping("/retrieve-all-blocs")
    //@Operation(description = "WS de récuperation de tous les Blocs ")
    public List<Bloc> getBlocs() {
        return blocService.retrieveAllBlocs();
        //return listBlocs;
    }


    // http://localhost:8089/tpfoyer/bloc/retrieve-bloc/8
    @GetMapping("/retrieve-bloc/{bloc-id}")
    public Bloc retrieveBloc(@PathVariable("bloc-id") Long bId) {
        Bloc bloc = blocService.retrieveBloc(bId);
        return bloc;

    }

    // http://localhost:8089/tpfoyer/bloc/add-bloc
    @PostMapping("/add-bloc")
    public Bloc addBloc(@RequestBody Bloc c, @RequestHeader("Authorization") String token) {
        return blocService.addBloc(c, token);
    }
    @GetMapping("/exists/{id}")
    public ResponseEntity<Boolean> checkblockExists(@PathVariable Long id) {
        boolean exists = blocRepository.existsById(id);
        return ResponseEntity.ok(exists);
    }




    // http://localhost:8089/tpfoyer/bloc/remove-bloc/{bloc-id}
    @DeleteMapping("/remove-bloc/{bloc-id}")
    public void removeBloc(@PathVariable("bloc-id") Long chId) {
        blocService.removeBloc(chId);
    }

    // http://localhost:8089/tpfoyer/bloc/modify-bloc
    @PutMapping("/modify-bloc")
    public Bloc modifyBloc(@RequestBody Bloc c) {
        Bloc bloc =blocService.modifyBloc(c);
        return bloc;
    }

    @GetMapping("/trouver-blocs-sans-foyer")
    public List<Bloc> getBlocswirhoutFoyer() {
        List<Bloc> listBlocs = blocService.trouverBlocsSansFoyer();
        return listBlocs;
    }

    @GetMapping("/get-bloc-nb-c/{nb}/{c}")
    public List<Bloc> recuperBlocsParNomEtCap(
            @PathVariable("nb") String nb,
            @PathVariable("c") long c) {

        return blocService.trouverBlocsParNomEtCap(nb, c);

    }

}
