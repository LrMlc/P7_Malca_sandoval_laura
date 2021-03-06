/* logique de routing, permet de voir quelles sont les routes disponibles dans notre application,
par le nom des fonction on voit ce que font les routes*/

const express = require('express');// importation d'express
const router = express.Router();// création d'un routeur avec la méthode express
const commentsCtrl = require('../controllers/comments');// récupération du contrôleur comments
const auth = require('../middlewares/auth');// récupération du middleware d'authentification
const multer = require('../middlewares/multer-config');// récupération du middleware gestion fichiers

// ROUTES

/* rajout de middlewares sur les routes qu'on veut protéger*/
//POST
router.post('/:postid', auth, multer, commentsCtrl.createComment); /* application de la logique métier createComments (controllers) ) la route POST */
router.delete('/:id', auth, multer, commentsCtrl.deleteComment); /* application de la ligique métier deleteComments (controllers) à la route DELETE */
router.get('/:id', auth, multer, commentsCtrl.getCommentsByPost); 
// EXPORT
module.exports = router;