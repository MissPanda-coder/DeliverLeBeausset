<?php
$title = "admin";
include '../elementPage/head.php';
include '../elementPage/navBar.php'; ?>

<div class="container">
    <h1>Gestion des Données</h1>
    <div class="select-container">
        <select id="entitySelect">
            <option value="stores">Magasins</option>
            <option value="products">Produits</option>
            <option value="departments">Rayons</option>
            <option value="shopstype">Type de magasin</option>
            <option value="shops_has_department">Attribution d'un rayon et d'un produit pour un magasin</option>
            <option value="units">Unités de mesure</option>
        </select>
        <select id="actionSelect">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
        </select>
    </div>
    <div id="formContainer"></div>
</div>



</div>


<?php

include '../elementPage/footer.php'; ?>