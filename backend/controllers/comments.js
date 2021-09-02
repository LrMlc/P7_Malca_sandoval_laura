/* ici est stocké la logique pour chaque fonction, stock de toute la logique métiers*/

const { json } = require('body-parser');
const Comments = require('../models/comments'); // récupération du model
const fs = require('fs'); // récupération du package fs de node.js qui gère les fichiers importés

// POST
module.exports.createComments = (req, res, next) => {
    const commentsObject = JSON.parse(req.body.post); // extraction de l'objet JSON sous forme de chaîne de caractère
    delete commentsObject._id; // suppression de l'id de commentsOject
    const comments = new Comments({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // middleware mutler, on modifie l'URL de l'image, on le génère
    });
    comments.save()
        .then(() => res.status(201).json({ message: 'Commentaire envoyé !' }))
        .catch(error => res.status(400).json({ error }));
};

// DELETE
module.exports.deleteComments = (req, res, next) => {
    Thing.deleteOne({_id: req.params.id}).then(() => {res.status(200).json({message: 'Commentaire supprimé!'});// on trouve l'objet dans la base de données
    }
    ).catch((error) => {res.status(400).json({error: error});
    }
    );
  };
    