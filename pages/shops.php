<?php
$title = "shops";
include '../elementPage/head.php';
include '../elementPage/navBar.php'; ?>



<div class="row" id="searchBar">
  <div class="col-lg-3 form_select ">
    <select class="text-secondary" id="categories" name="categories">
      <option selected disabled value="">Toutes les catégories</option>
      <option>Fruits et légumes</option>
      <option>Apéritif</option>
      <option>Boissons</option>
      <option>Viandes</option>
      <option>Beauté</option>
      <option>Hygiène</option>
    </select>
  </div>
  <div class="col-lg-8">
    <input type="search" id="searchBar_input" name="q" />
  </div>
  <div class="col-lg-1">
    <button type="submit" class="search_button"><i class="fas fa-search"></i></button>
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
              <img src="./public/img/categories/legumes.jpg" class="img-fluid mb-2" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span><button value="2">Fruits et Legumes</button></span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/aperitif.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <a href="products"><span>Apéritifs</span></a>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/boissons.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <a href="products"><span>Boissons</span></a>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/viandes.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <a href="products"><span>Viandes</span></a>
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
              <a href="products"><span>Beauté</span></a>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/hygiene.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <a href="products"><span>Hygiène</span></a>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/nutrition.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <a href="products"><span>Nutrition</span></a>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/sport.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <a href="products"><span>Sport</span></a>
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
              <img src="./public/img/categories/legumes.jpg" class="img-fluid mb-2" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span>Fruits et Legumes</span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/aperitif.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <span>Apéritif</span>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/boissons.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <span>Boissons</span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/viandes.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <span>Viandes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="card mb-4">
        <div class="card-header">Alimentation</div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/legumes.jpg" class="img-fluid mb-2" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span>Fruits et Legumes</span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/aperitif.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <span>Apéritif</span>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/boissons.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <span>Boissons</span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/viandes.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <span>Viandes</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card mb-4">
        <div class="card-header">Parapharmacie</div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/beaute.jpg" class="img-fluid mb-2" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span>Beauté</span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/hygiene.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <span>Hygiène</span>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/nutrition.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <span>Nutrition</span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/sport.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <span>Sport</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card mb-4">
        <div class="card-header">Alimentation</div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/legumes.jpg" class="img-fluid mb-2" alt="photo d'un panier de légumes posé sur le sol dans un champs">
              <span>Fruits et Legumes</span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/aperitif.jpg" class="img-fluid mb-2" alt="photo d'un paquet de chips nature Lays 150g">
              <span>Apéritif</span>
            </div>

          </div>
          <div class="row">
            <div class="col-6">
              <img src="./public/img/categories/boissons.jpg" class="img-fluid mb-2" alt="photo de 4 boissons différentes, faiches, posées sur une table">
              <span>Boissons</span>
            </div>
            <div class="col-6">
              <img src="./public/img/categories/viandes.jpg" class="img-fluid mb-2" alt="photo d'un étal de diverses viandes dans un magasin">
              <span>Viandes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php
include '../elementPage/footer.php'; ?>