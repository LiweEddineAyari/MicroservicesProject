package com.example.foyer.service;


import com.example.foyer.entity.Foyer;
import com.example.foyer.repository.FoyerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@AllArgsConstructor
public class FoyerServiceImpl implements IFoyerService {
    @Autowired
    FoyerRepository foyerRepository;
    public List<Foyer> retrieveAllFoyers() {
        return foyerRepository.findAll();
    }
    public Foyer retrieveFoyer(Long foyerId) {
        return foyerRepository.findById(foyerId).get();
    }
    public Foyer addFoyer(Foyer f) {
        return foyerRepository.save(f);
    }
    public Foyer modifyFoyer(Foyer foyer) {
        return foyerRepository.save(foyer);
    }

    public void removeFoyer(Long foyerId) {
        foyerRepository.deleteById(foyerId);
    }
}
