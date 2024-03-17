const mongoose = require('mongoose');

const AutheurSchema =new mongoose.Schema({
    nom: String,
    prenom: String,
    nationalite: String,
});

const autheurModel = mongoose.model("autheurs", AutheurSchema);
module.exports = autheurModel