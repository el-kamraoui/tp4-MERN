const mongoose = require('mongoose');

const EditeurSchema =new mongoose.Schema({
    nom: String,
    prenom: String,
    pays: String,
});

const editeurModel = mongoose.model("editeurs", EditeurSchema);
module.exports = editeurModel