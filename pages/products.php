<?php
$title = "products";
include '../elementPage/head.php';
include '../elementPage/navBar.php';
?>

<div class="products-cart">
    <div id="product-container" class="product-container">

    </div>

    <div class="cart-part">
        <div id="cart-container" class="cart-container">

        </div>
        <div class="cart-footer">
            <div class="total">
                Total (0 items): $0
            </div>
            <div class="checkout">
                Proceed to checkout
            </div>
        </div>
    </div>


</div>


<script src="js/showProducts.js"></script>
<?php
include '../elementPage/footer.php'; ?>