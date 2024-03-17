const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');

function verifyToken(req, res, next){
    const token = req.headers.authorization;
  
    if (!token){
        return res.status(403).json({message: "Le token obligatoire pour l'authentification"});
    }
    try{
        const secretKey = process.env.TOKEN;
        const decoded = jwt.verify(token, secretKey);
        if (!decoded) {
            return res.status(401).json({message: "Token invalide"});
        }
        next();
    }catch (error){
        return res.status(401).json({message: "Token invalide"});
    }
};

model.exports = verifyToken