const express = require('express');
const router = express.Router();
const LivreModel = require('../Models/livreModel');

router.get('/all', (req, res)=>{
    LivreModel.find()
    .then(livres => res.json(livres))
    .catch(err => res.json(err))
});

router.get('/auteurs/:livrename', (req, res)=>{
    LivreModel.findOne({titre: req.params.livrename}).populate('auteur')
    .then(autheur => res.json(autheur))
    .catch(err => res.json(err))
});

router.get('/editeurs/:livrename', (req, res)=>{
    LivreModel.findOne({titre: req.params.livrename}).populate('editeur')
    .then(editeur => res.json(editeur))
    .catch(err => res.json(err))
});

router.get('/listCategorie/:category', (req, res)=>{
    LivreModel.find({genre: req.params.category})
    .then(catigories => res.json(catigories))
    .catch(err => res.json(err))
});

router.get('/:annee1/:annee2', (req, res)=>{
    LivreModel.find({date_publication: {$gte: new Date(req.params.annee1), $lte: new Date(req.params.annee2)}})
    .then(livres => res.json(livres))
    .catch(err => res.json(err))
});

router.post('/add', (req, res)=>{
    LivreModel.create({
        titre: req.body.titre,
        genre: req.body.genre,
        date_publication: req.body.date_publication,
        autheur: req.body.autheur,
        editeur: req.body.editeur
    })
    .then(livre => res.json(livre))
    .catch(err => res.json(err))
});

router.put('/update/:name', (req, res)=>{
    LivreModel.findOneAndUpdate({titre: req.params.name}, {
        titre: req.body.titre,
        genre: req.body.genre,
        date_publication: req.body.date_publication,
        autheur: req.body.autheur,
        editeur: req.body.editeur
    })
    .then(livre => res.json(livre))
    .catch(err => res.json(err))
});

router.delete('/delete/:name', (req, res)=>{
    LivreModel.findOneAndDelete({titre: req.params.name})
    .then(livre => res.json(livre))
    .catch(err => res.json(err))
});

module.exports = router;