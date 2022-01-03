# PROJET N°6: GROUPOMANIA (Créez un réseau social d’entreprise)
-------------------------------
# Objetif du projet: 
*Le projet consiste à construire un réseau social interne pour les employés de __Groupomania__. Le but de cet outil est de faciliter les interactions entre collègues.*
- Ce projet simule le fonctionnement d'un réseau social d'entreprise appelé GROUPOMANIA
- Le framework choisi pour le frontend est vue.js
- Le backend tourne avec Node.js/Express.js et l'ORM Sequelize
- la database est MySQL
-------------------------------
## Prérequis
* Frontend: Vue.js
* Backend: Node.js (avec Express.js)
* ORM: Sequelize (avec sequelize CLI)
* Database: MySQL
-------------------------------
## Installation
Clonez ce projet depuis GitHub

- Ouvrir un terminal depuis la racine du projet

- FRONTEND:
    cd vue-frontend
    npm install
    npm run serve

- BACKEND:
    cd backend
    npm install
    npm i sequelize-cli
    npx sequelize-cli db:create
    node server.js
    npm run dev ou npm run start

- Ouvrir un navigateur: http://localhost:8080

-------------------------------


## CREER UN FICHIER ".ENV":

- Pour plus de sécurité et dans le but de protéger votre base de données, vous devez créer votre fichier ".env". Vous devez le faire dans le répertoire "Root" de l'application. Stockez votre clé ( nom d'utilisateur, mot de passe et le json web token) dans des variables pour que le framework puisse la lire.

* Exemple:

user=identifiant
pass=monmotdepasse
jwt_secret=minusmajusc123

- Attention! Le json web token secret (jwt), doit être un ensemble d'au moins 10/15 caractères de chiffres et lettres aléatoires !

- Il faut également ajouter le fichier dans la liste des fichiers à ignorer (".gitignore"= afin que votre clé ne se retrouve pas en ligne. A noter que pour accéder à votre variable dans le code, vous devez utiliser la notation "process.env." suivie du nom de votre variable.

