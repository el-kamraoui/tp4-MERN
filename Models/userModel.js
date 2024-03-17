const mongoose = require('mongoose');

const UserSchema =new mongoose.Schema({
    username: {type: String, minlength: 5},
    Nom_compte: {type: String, minlength: 5},
    email: {type: String, required: true, unique: true},
    mdp: {type: String},
});

const UserModel = mongoose.model('users',  UserSchema);
module.exports = UserModel