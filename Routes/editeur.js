const express = require('express');
const route = express.Router();
const EditeurModel = require('../Models/editeurModel');

route.get('/all', (req, res)=>{
    EditeurModel.find()
    .then(editeurs => res.json(editeurs))
    .catch(err => res.json(err))
});

route.get('/names', (req, res)=>{
    EditeurModel.find({}, 'nom')
    .then(editeurs => res.json(editeurs))
    .catch(err => res.json(err))
});

route.post('add', (req, res)=>{
    EditeurModel.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        pays: req.body.pays
    })
    .then(editeur => res.json(editeur))
    .catch(err => res.json(err))
});

route.put('/update/:name', (req,res)=>{
    EditeurModel.findOneAndUpdate({nom: req.params.name}, {
        nom: req.body.nom,
        prenom: req.body.prenom,
        pays: req.body.pays
    })
    .then(editeur => res.json(editeur))
    .catch(err => res.json(err))
});

route.delete('/delete/:name', (req,res)=>{
    EditeurModel.findOneAndDelete({nom: req.params.name})
    .then(editeur => res.json(editeur))
    .catch(err => res.json(err))
});

module.exports = route