/* ici est stocké la logique pour chaque fonction, stock de toute la logique métiers*/

const { json } = require('body-parser');
const Post = require('../models/post'); // récupération du model
const Comments = require('../models/comments'); // ?
const User = require('../models/user'); //?
const fs = require('fs'); // récupération du package fs de node.js qui gère les fichiers importés

// POST
module.exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post); // extraction de l'objet JSON sous forme de chaîne de caractère
    delete postObject._id; // suppression de l'id de postOject
    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // middleware mutler, on modifie l'URL de l'image, on le génère
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Post créé !' }))
        .catch(error => res.status(400).json({ error }));
};

// PUT
module.exports.modifyPost = (req, res, next) => {
    const postObject = req.file ?// si il y a une nouvelle image
        {
            ...JSON.parse(req.body.post), // récupération de toute les informations qui font partis de la requête
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body }; // si il n'y a pas de nouvelle image on traite la requête comme objet directement
    if (req.file) {
        post.findOne({ _id: req.params.id })
            .then(post => {
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id }) /*   récupération de l'objet créé et on modifie son identifiant pour correspondre à l'identifiant des paramètres de requête */
                        .then(() => res.status(200).json({ message: 'Post modifié' }))
                        .catch(error => res.status(400).json({ error }));
                });
            }).catch(error => res.status(400).json({ error }))
    } else {
        Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id }) //mise à jour du post
            .then(() => res.status(200).json({ message: ' Votre post a été modifié' }))
            .catch(error => res.status(400).json({ error }));
    }
};

// DELETE
module.exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id }) // on trouve l'objet dans la base de données
        .then(post => { // quand on le trouve on extrait le nom du fichier à supprimer
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => { // on le supprime
                Post.deleteOne({ _id: req.params.id }) // on fait la suppression de l'objet dans la base en renvoyant les réponses
                    .then(post => res.status(200).json({ message: 'Post supprimé' }))
                    .catch(error => res.status(404).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};


// GET
module.exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id }) // récupération d'un seul post
        .then((post) => res.status(200).json(post))
        .catch(error => {
            console.log(error);
            res.status(400).json({ error });
        })
};

// GET
module.exports.getAllPosts = (req, res, next) => {
    Post.find() // récupération de la liste de tout les posts
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};
