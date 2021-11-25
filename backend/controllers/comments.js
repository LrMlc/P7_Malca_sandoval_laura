/* ici est stocké la logique pour chaque fonction, stock de toute la logique métiers*/

const { json } = require('body-parser');
const Comments = require('../models/comments'); // récupération du model
const fs = require('fs'); // récupération du package fs de node.js qui gère les fichiers importés

// POST
module.exports.createComment = (req, res, next) => {
    const commentObject = JSON.parse(req.body.post); // extraction de l'objet JSON sous forme de chaîne de caractère
    delete commentObject._id; // suppression de l'id de commentsOject
    const comment = new Comment({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // middleware mutler, on modifie l'URL de l'image, on le génère
    });
    comment.save()
        .then(() => res.status(201).json({ message: 'Commentaire envoyé !' }))
        .catch(error => res.status(400).json({ error }));
        //rajouter dans la route un post id et dans le create comment, corriger ça
};
// GET
module.exports.getCommentsByPost = (req, res, next) => {
    Comments.findAll({ include: { model: User, attributes: ["pseudo"] }, order: [["id", "DESC"]] }) // récupération de la liste de tout les comments
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json({ error }));
};

// DELETE
module.exports.deleteComment = (req, res, next) => {
    Comments.findOne({ where: { id: req.params.id } }) // récupération d'un seul commentaire
        .then((comment) => {

            if (post.UserId === req.currentUser.userId || req.currentUser.isAdmin) {
                Comments.deleteOne(comment.UserId === UserId || req.isAdmin)
                .then(() => 
                {
                    res.status(200).json({ message: 'Commentaire supprimé!' });// on trouve l'objet dans la base de données
                }
                ).catch((error) => {
                    res.status(400).json({ error: error });
                }
                );
            } else { res.status(401).json({error:"Vous n'avez pas les droits pour supprimer ce commentaire"})}
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error });
        })
};

