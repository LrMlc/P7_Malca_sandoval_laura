/* logique de routing, permet de voir quelles sont les routes disponibles dans notre application,
par le nom des fonction on voit ce que font les routes*/

const express = require('express');// importation d'express
const router = express.Router();// création d'un routeur avec la méthode express
const postCtrl = require('../controllers/post');// récupération du contrôleur comments
const auth = require('../middlewares/auth');// récupération du middleware d'authentification
const multer = require('../middlewares/multer-config');// récupération du middleware gestion fichiers

// ROUTES

/* rajout de middlewares sur les routes qu'on veut protéger*/
// POST
router.post('/', auth, multer, postCtrl.createPost); /* application de la logique métier createPost (controllers) à la route POST */

// PUT
router.put('/:id', multer, postCtrl.modifyPost); /* application de la logique métier modifyPost (controllers) à la route PUT */

// DELETE
router.delete('/:id',auth, multer, postCtrl.deletePost); /* application de la logique métier deletePost (controllers) à la route DELETE */

// GET 
router.get('/:id', auth, multer, postCtrl.getOnePost); /* application de la logique métier getOnePost (controllers) à la route GET */

// GET 
router.get('/', auth, multer, postCtrl.getAllPosts); /* application de la logique métier getAllPost (controllers) à la route GET */

// EXPORT
module.exports = router;
