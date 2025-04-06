const express = require('express');
const Universite = require('./Universite');
const router = express.Router();

router.post('/universites', async (req, res) => {
  const { nomUniversite, adresse } = req.body;
  
  try {
    const universite = new Universite({ nomUniversite, adresse });
    await universite.save();
    res.status(201).json(universite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/universites', async (req, res) => {
  try {
    const universites = await Universite.find();
    res.status(200).json(universites);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.get('/universitess', async (req, res) => {
    try {
      
      res.status(200).json({ message: 'Route publique accessible sans authentification' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
router.get('/universites/:id', async (req, res) => {
  try {
    const universite = await Universite.findById(req.params.id);
    if (!universite) return res.status(404).json({ message: 'Université non trouvée' });
    res.status(200).json(universite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/universites/:id', async (req, res) => {
  try {
    const universite = await Universite.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!universite) return res.status(404).json({ message: 'Université non trouvée' });
    res.status(200).json(universite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/universites/:id', async (req, res) => {
  try {
    const universite = await Universite.findByIdAndDelete(req.params.id);
    if (!universite) return res.status(404).json({ message: 'Université non trouvée' });
    res.status(200).json({ message: 'Université supprimée avec succès' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
