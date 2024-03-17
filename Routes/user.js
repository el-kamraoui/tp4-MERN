const express = require('express');
const route = express.Router();
const UserModel = require('../Models/userModel');

route.get('/all', (req, res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

route.get('/names', (req, res)=>{
    UserModel.find({}, 'username')
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

route.post('add', (req, res)=>{
    UserModel.create({
        username: req.body.username,
        Nom_compte: req.body.nom_compte,
        email: req.body.email,
        mdp: req.body.mdp
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
});

route.put('/update/:name', (req,res)=>{
    UserModel.findOneAndUpdate({username: req.params.name}, {
        username: req.body.username,
        Nom_compte: req.body.nom_compte,
        email: req.body.email,
        mdp: req.body.mdp
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
});

route.delete('/delete/:name', (req,res)=>{
    UserModel.findOneAndDelete({username: req.params.name})
    .then(user => res.json(user))
    .catch(err => res.json(err))
});

model.exports = route