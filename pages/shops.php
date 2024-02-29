<?php
$title = "shops";
include '../elementPage/head.php';
include '../elementPage/navBar.php'; ?>



<div class="search-wrapper">
  <div id="searchBar" class="searchBar-container">
    <div class="searchBar-select">
      <select class="text-secondary" id="categories" name="categories">
        <option selected disabled value="">Catégories</option>
        <option>Fruits et légumes</option>
        <option>Apéritif</option>
        <option>Boissons</option>
        <option>Viandes</option>
        <option>Beauté</option>
        <option>Hygiène</option>
      </select>
    </div>
    <div class="searchBar-text">
      <input type="search" id="searchBar_input" name="q" />
    </div>
    <div class="searchBar-glass">
      <button type="submit" class="search_button">
        <img src="./public/img/outils/loupe.png" class="glass">
      </button>
    </div>
  </div>
</div>



<div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="card mb-4">
        <h6 class="card-header text-secondary">Alimentation</h6>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/legumes.jpg" class="img-fluid mb-2 categories_img" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span><button class="categories_button text-secondary" value="2">Fruits et Legumes</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/aperitif.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <span><button class="categories_button text-secondary" value="3">Apéritif</button></span>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/boissons.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <span><button class="categories_button text-secondary" value="">Boissons</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/viandes.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <span><button class="categories_button text-secondary" value="">Viandes</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card mb-4">
        <h6 class="card-header text-secondary">Parapharmacie</h6>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/beaute.jpg" class="img-fluid mb-2" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span><button class="categories_button text-secondary" value="">Beauté</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/hygiene.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <span><button class="categories_button text-secondary" value="">Hygiène</button></span>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/nutrition.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <span><button class="categories_button text-secondary" value="">Nutrition</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/sport.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <span><button class="categories_button text-secondary" value="">Sport</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="col-md-4">
      <div class="card mb-4">
      <h6 class="card-header text-secondary">Alimentation</h6>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/legumes.jpg" class="img-fluid mb-2 categories_img" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span><button class="categories_button text-secondary" value="2">Fruits et Legumes</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/aperitif.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <span><button class="categories_button text-secondary" value="">Apéritif</button></span>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/boissons.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <span><button class="categories_button text-secondary" value="">Boissons</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/viandes.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <span><button class="categories_button text-secondary" value="">Viandes</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="card mb-4">
      <h6 class="card-header text-secondary">Alimentation</h6>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/legumes.jpg" class="img-fluid mb-2 categories_img" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span><button class="categories_button text-secondary" value="2">Fruits et Legumes</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/aperitif.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <span><button class="categories_button text-secondary" value="">Apéritif</button></span>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/boissons.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <span><button class="categories_button text-secondary" value="">Boissons</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/viandes.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <span><button class="categories_button text-secondary" value="">Viandes</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card mb-4">
      <h6 class="card-header text-secondary">Parapharmacie</h6>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/beaute.jpg" class="img-fluid mb-2" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span><button class="categories_button text-secondary" value="">Beauté</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/hygiene.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <span><button class="categories_button text-secondary" value="">Hygiène</button></span>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/nutrition.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <span><button class="categories_button text-secondary" value="">Nutrition</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/sport.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <span><button class="categories_button text-secondary" value="">Sport</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card mb-4">
      <h6 class="card-header text-secondary">Alimentation</h6>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/legumes.jpg" class="img-fluid mb-2 categories_img" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span><button class="categories_button text-secondary" value="2">Fruits et Legumes</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/aperitif.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <span><button class="categories_button text-secondary" value="">Apéritif</button></span>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/boissons.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <span><button class="categories_button text-secondary" value="">Boissons</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/viandes.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <span><button class="categories_button text-secondary" value="">Viandes</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<?php
include '../elementPage/footer.php'; ?>