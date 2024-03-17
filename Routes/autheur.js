const express = require('express');
const route = express.Router();
const AutheurModel = require('../Models/autheurModel');
const EditeurModel = require('../Models/editeurModel');

route.get('/all', (req, res)=>{
    AutheurModel.find()
    .then(autheurs => res.json(autheurs))
    .catch(err => res.json(err))
});

route.get('/names', (req, res)=>{
    AutheurModel.find({}, 'nom')
    .then(autheurs => res.json(autheurs))
    .catch(err => res.json(err))
});

route.get('/editeurs', (req, res)=>{
    try{
        const auteurs = AutheurModel.find();
        const result = Promise.all(auteurs.map((auteur)=>{
            const nombreEditeurs = EditeurModel.countDocuments({auteur: auteur.nom});
            return {nom: auteur.nom, nombre_editeurs: nombreEditeurs};
        }));
        res.json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

route.post('add', (req, res)=>{
    AutheurModel.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        nationalite: req.body.nationalite
    })
    .then(autheur => res.json(autheur))
    .catch(err => res.json(err))
});

route.put('/update/:name', (req,res)=>{
    AutheurModel.findOneAndUpdate({nom: req.params.name}, {
        nom: req.body.nom,
        prenom: req.body.prenom,
        nationalite: req.body.nationalite
    })
    .then(autheur => res.json(autheur))
    .catch(err => res.json(err))
});

route.delete('/delete/:name', (req,res)=>{
    AutheurModel.findOneAndDelete({nom: req.params.name})
    .then(autheur => res.json(autheur))
    .catch(err => res.json(err))
});

module.exports = route