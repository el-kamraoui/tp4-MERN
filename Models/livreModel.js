const mongoose = require('mongoose');

const LivreSchema =new mongoose.Schema({
    titre: String,
    autheur: {type: mongoose.Schema.Types.ObjectId, ref: 'autheurs'},
    editeur: {type: mongoose.Schema.Types.ObjectId, ref: 'editeurs'},
    genre: String,
    date_publication: Date
});

const LivreModel = mongoose.model("livres", LivreSchema);
module.exports = LivreModel