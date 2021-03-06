// AUTHENTIFICATION
const jwt = require('jsonwebtoken'); // récupération de jwt pour contrôler les tokens

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization; /*récuparation du token dans le header autorisation*/
      
        const decodedToken = jwt.verify(token, process.env.jwt_secret);/* on décode le token*/
        req.currentUser=decodedToken;
        //req.isAdmin = decodedToken.isAdmin;
            next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error:'Requête non authentifiée !'});
}
};