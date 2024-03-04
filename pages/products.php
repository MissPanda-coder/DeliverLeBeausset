<?php
$title = "products";
include '../elementPage/head.php';
include '../elementPage/navBar.php';
?>

<div class="products-cart">
   
    <div id="product-container" class="product-container">

    </div>

    <div class="cart-part">
    <h4 class="cart-title text-secondary">Votre panier</h4>
        <div id="cart-container" class="cart-container">

        </div>
        <div class="cart-footer">
            <div class="total text-secondary">
               
            </div>
            <div class="checkout">
                <button class= "checkout-btn">Procéder au paiement</button>
            </div>
        </div>
    </div>


</div>


<script src="js/showProducts.js"></script>
<?php
include '../elementPage/footer.php'; ?>