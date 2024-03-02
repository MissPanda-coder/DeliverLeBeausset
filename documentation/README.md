INFORMATIONS GENERALES

Titre du projet : Deliver Le Beausset

Ce fichier README a été généré le [21/02/2024] par [Adeline].

Dernière mise-à-jour le : [27/02/2024].

INFORMATIONS METHODOLOGIQUES
Description du projet :
Deliver Le Beausset est un site web qui permet aux habitants du Beausset de commander leurs courses en ligne et de se faire livrer à domicile gratuitement. Le site propose une sélection de boutiques où les utilisateurs peuvent effectuer leurs achats en ligne.

Ensemble des technologies utilisées :
Front-end :
HTML5
CSS
JavaScript
Bootstrap 5.3.2
Sass 1.70.0

Back-end : 
Express.js 1.0.0
MySQL2 3.9.1
Node.js
Cors
Nodemon 3.0.3
PHPmyadmin
Workbench
PHP


Outils :
Postman
Dafont


APERCU DES DONNEES ET FICHIERS
Convention de nommage des fichiers :
Les fichiers sont nommés de manière descriptive en fonction de leur contenu et de leur fonctionnalité. Modèle : Bien que nous n'ayons pas explicitement séparé les fichiers de modèle, l'idée est que les données et leur manipulation sont gérées dans le code JavaScript de l'application, dans app.js, routes/*. Dans notre structure, les données peuvent être stockées dans la base de données et manipulées par les routes correspondantes.

Vue : Les fichiers HTML dans le dossier public servent de vues. Ils sont responsables de l'affichage des données et de l'interface utilisateur. Les fichiers CSS dans public/styles/css gèrent le style et la présentation de la vue.

Contrôleur : Les fichiers de routage dans le dossier routes agissent comme des contrôleurs. Ils reçoivent les demandes des utilisateurs, traitent ces demandes en fonction des règles métier de l'application, puis renvoient les résultats à la vue appropriée.

Arborescence/plan de classement des fichiers :
- /DeliverLeBeausset
- /action
    - processFPw.php
    - processLogIn.php
    - processRegister.php
    - user.php
- /documentation 
    - README.md
- /ElementPage
    - footer.php
    - head.php
    - navBar.php
- /js
    - admin.js
    - cart.js
    - forgot.js   
    - formLogIn.js
    - formRegister.js
    - hamburger.js
    - login.js
    - register.js      
    - showProducts.js 
- /node_modules
- /pages  
    - about.php
    - admin.php
    - cart.php
    - cgv.php
    - condifendialPolicy.php
    - products.php
    - shops.php
- /public
        - /favicon
        -/fonts
        - /img
        - /styles
            - /css
                - style.css
            - /scss
            - _about.scss
            - _btn.scss
            - _cgv.scss
            - _footer.scss
            - _form.scss
            - _home.scss
            - _login.scss
            - _navbar.scss
            - _pdc.scss
            - _products.scss
            - _register.scss
            - _shops.scss
            - _variables.scss
            - _style.scss
- /routes
        - get.js
        - update.js
        - delete.js
        - post.js
- .gitignore
- .htaccess
- app.js
- index.php
- package-lock.json
- package.json
- server.js


Méthodologie BEM pour le nommage des classes et IDs : Dans le cadre du développement du projet Deliver Le Beausset, nous avons adopté la méthodologie BEM (Block, Element, Modifier) pour le nommage cohérent et structuré de nos classes CSS et IDs HTML. La méthodologie BEM offre une approche modulaire et sémantique, ce qui facilite la compréhension et la maintenance du code CSS. Chaque classe est nommée en fonction de son rôle et de son contexte dans l'interface utilisateur, ce qui favorise une meilleure organisation et évite les conflits de noms. De plus, l'utilisation de BEM facilite la collaboration au sein de l'équipe de développement en fournissant une structure claire et prévisible pour l'architecture CSS du projet.


Description de l'API :
But principal de l'API : L'API vise à simplifier et gérer les multiples produits proposés en vente dans les différentes boutiques partenaires du Beausset, avec notamment des possibilités de selectionner les produits par catégories ou magasin.

Services ou fonctionnalités offerts aux utilisateurs : Les utilisateurs peuvent passer des commandes via le site web dans les différents magasins partenaires du Beausset. L'API permet également la gestion d'un panier d'achat, la création et la modification de profils utilisateurs, ainsi que la planification des livraisons à domicile.

Endpoints de l'API :
Endpoints disponibles : Les endpoints de l'API comprennent des fonctionnalités telles que la gestion de comptes utilisateurs, la navigation dans les magasins partenaires, la consultation et l'ajout de produits au panier, ainsi que la gestion des commandes et des livraisons.

Méthodes HTTPS autorisées : Les méthodes HTTPS autorisées pour chaque endpoint incluent principalement GET, POST, PUT et DELETE, en fonction des actions nécessaires. Les endpoints sensibles sont accessibles uniquement à l'administrateur.

Paramètres requis ou facultatifs : Certains endpoints exigent des paramètres obligatoires, comme l'identifiant de l'utilisateur ou du produit, tandis que d'autres peuvent accepter des paramètres facultatifs pour filtrer les résultats ou spécifier des préférences.

Réponses attendues : Les réponses de l'API sont au format JSON, fournissant des données structurées sur les produits, les utilisateurs, les commandes, etc.

Sécurité :
Mesures de sécurité : L'API met en place des mesures de sécurité telles que l'authentification des utilisateurs (via une seconde base de données userdeliver), la gestion des autorisations d'accès aux endpoints sensibles.

Authentification requise : une authentification est requise pour accéder à certaines parties de l'API, notamment pour passer des commandes ou accéder aux informations personnelles de l'utilisateur.

Exemples d'utilisation :
Exemples d'utilisation : les administrateurs peuvent interagir avec l'API en envoyant des requêtes HTTPS aux endpoints appropriés, par exemple, en utilisant POST pour passer une commande, GET pour récupérer les détails d'un produit, ou PUT pour mettre à jour les informations du profil utilisateur.

Interactions avec l'API : Les interactions avec l'API peuvent être réalisées à l'aide de clients HTTPS tels que Postman, facilitant ainsi le test et le développement.

Gestion des erreurs :
Gestion des erreurs : Les erreurs sont traitées de manière appropriée par l'API, avec des codes d'état HTTPS correspondants renvoyés en cas d'erreur. Des messages d'erreur spécifiques sont également fournis pour aider les développeurs à diagnostiquer et à résoudre les problèmes rencontrés.

Codes d'état HTTPS : Les codes d'état HTTPS standards sont utilisés pour indiquer le succès ou l'échec d'une requête, fournissant ainsi une indication claire de l'état de l'opération.

Exigences et dépendances :
Exigences logicielles/matérielles : Pour utiliser l'API, les utilisateurs nécessitent généralement un navigateur web moderne compatible avec JavaScript et une connexion internet stable. Des connaissances en programmation web et en utilisation d'API REST peuvent également être nécessaires.

Dépendances spécifiques : Les dépendances spécifiques dépendent de l'environnement de développement et des technologies utilisées, telles que Node.js, MySQL, etc. Ces dépendances doivent être installées et configurées correctement pour assurer le bon fonctionnement de l'API.

Contact :
Comment contacter l'équipe : Les développeurs peuvent contacter l'équipe responsable de l'API via une adresse e-mail dédiée ou d'autres canaux de communication fournis par l'entreprise (via la rubrique politique de confidentialité).

