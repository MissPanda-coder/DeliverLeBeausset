<header>
    <nav class="navbar">
        <div class="logo">
            <img src="./public/favicon/favicon-32x32.png" decoding="async" alt="Logo de Deliver représentant un jeune homme en scooter en livraison">
        </div>
        <div class="hamburger">
            <div class="hamburger_line1"></div>
            <div class="hamburger_line2"></div>
            <div class="hamburger_line3"></div>
        </div>
        <ul class="nav_links">
            <li><a href="index.php">Accueil</a></li>
            <li><a href="shops">Boutiques</a></li>
            <li><a href="about">A propos</a></li>
            <li><button class="login_button" href="login">Identifiez-vous, Compte et listes</button></li>
            <a href="cart"><img class="cart_img" src="./public/img/outils/panier.png" alt="image d'un panier pour passer commande"></a>
        </ul>
    </nav>

    <div id="login">
    <form id="loginForm" action="processLogIn.php" name="login" method="POST">
        <h2 class="text-secondary">Connexion</h2>
        <div class="form_field text-secondary">
    <label for="email_login">Email</label>
    <input type="email" name="email_login" id="email_login" value="<?= isset($email_login) ? htmlspecialchars($email_login) : "" ?>">
    <?= isset($errors['email_login']) ? '<p style="color:red">' . $errors['email_login'] . '</p>' : "" ?>
    <small></small>
    </div>

    <div class="form_field text-secondary">
    <label for="password_login">Mot de passe
    <input type="password" name="password_login" id="password_login" class="password_eye" toggle>
    <?= isset($errors['password_login']) ? '<p style="color:red">' . $errors['password_login'] . '</p>' : "" ?>
    <span toggle="password-field" class="fa fa-eye-slash field_icon toggle-password"></span>
    <small></small>
    </label>
    </div>
    <div class="form_field form_field-center">
        <button type="submit" class="login_button">Connexion</button>
        <a href="#" class="forgot_password text-secondary">Mot de passe oublié ?</a>
        <a class="register_button text-secondary" href="#">Pas encore inscrit ? Inscrivez-vous ici</a>
    </div> 
    </form>
</div>



<div id="forgotPassword">
    <form id="forgotPasswordForm" action="processFPw.php" method="POST">
        <h2 class="text-secondary">Mot de passe oublié</h2>
        <div class="form_field">
            <label for="email_forgot">Email</label>
            <input type="email" name="email_forgot" id="email_forgot" value="<?= isset($email_forgot) ? $email_forgot : '' ?>">
            <?= isset($errors['email_forgot']) ? '<p style="color:red">' . $errors['email_forgot'] . '</p>' : "" ?>
            <?= isset($success_message) ? '<p style="color:green">' . $success_message . '</p>' : "" ?>
            <small></small>
        </div>
        <button type="submit" class="forgot_button">Envoyer</button>
    </form>
</div>





    <div id="register">
        <form id="registerForm" action="processRegister.php" method="POST" name="register">
            <h2 class="text-secondary">Inscription</h2>
            <div class="form_field">
                <label for="name">Nom</label>
                <input type="text" name="name" id="name" autocomplete="off" value="<?= isset($name) ? $name : '' ?>">
                <?= isset($errors['name']) ? '<p style="color:red">' . $errors['name'] . '</p>' : "" ?>
                <small></small>
            </div>
            <div class="form_field">
                <label for="first_name">Prénom</label>
                <input type="text" name="first_name" autocomplete="off" id="first_name" value="<?= isset($first_name) ? $first_name : '' ?>">
                <?= isset($errors['first_name']) ? '<p style="color:red">' . $errors['first_name'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form_field">
                <label for="street_number">Numéro de rue</label>
                <input type="text" name="street_number" autocomplete="off" id="street_number" value="<?= isset($street_number) ? $street_number : '' ?>">
                <?= isset($errors['street_number']) ? '<p style="color:red">' . $errors['street_number'] . '</p>' : "" ?>
                <small></small>
            </div>
            <div class="form_field">
                <label for="street_name">Nom de rue</label>
                <input type="text" autocomplete="off" name="street_name" id="street_name" value="<?= isset($street_name) ? $street_name : '' ?>">
                <?= isset($errors['street_name']) ? '<p style="color:red">' . $errors['street_name'] . '</p>' : "" ?>
                <small></small>
            </div>
            <div class="form_field">
                <label for="postal_code">Code postal</label>
                <input type="text" name="postal_code" id="postal_code" value="<?= isset($postal_code) ? $postal_code : '83330' ?>">
                <?= isset($errors['postal_code']) ? '<p style="color:red">' . $errors['postal_code'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form_field">
                <label for="city">Ville</label>
                <input type="text" name="city" id="city" value="<?= isset($city) ? htmlspecialchars($city) : 'LE BEAUSSET' ?>">
                <?= isset($errors['city']) ? '<p style="color:red">' . $errors['city'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form_field">
                <label for="phone">Téléphone</label>
                <input type="tel" autocomplete="off" name="phone" id="phone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" value="<?= isset($phone) ? htmlspecialchars($phone) : '' ?>">
                <?= isset($errors['phone']) ? '<p style="color:red">' . $errors['phone'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form-field">
                <label for="dob">Date de naissance</label>
                <input type="date" name="dob" id="dob" value="<?= isset($dob) ? htmlspecialchars($dob) : '' ?>">
                <?= isset($errors['dob']) ? '<p style="color:red">' . $errors['dob'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form_field">
                <label for="email">Email</label>
                <input type="email" autocomplete="off" name="email" id="email" value="<?= isset($email) ? htmlspecialchars($email) : '' ?>">
                <?= isset($errors['email']) ? '<p style="color:red">' . $errors['email'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form_field">
                <label for="password">Mot de passe</label>
                <input type="password" autocomplete="off" name="password" id="password" toggle="">
                <?= isset($errors['password']) ? '<p style="color:red">' . $errors['password'] . '</p>' : "" ?>
                <span toggle="password-field" class="fa fa-eye-slash field-icon toggle-password"></span>
                <small></small>
            </div>
            <div class="form_field">
    <label for="passwordconfirm">Confirmez le mot de passe</label>
    <input type="password" name="passwordconfirm" id="passwordconfirm" autocomplete="off">
    <?= isset($errors['passwordconfirm']) ? '<p style="color:red">' . $errors['passwordconfirm'] . '</p>' : "" ?>
    <small></small>
</div>

<div class="form_field">
    <input type="checkbox" id="cgv" name="cgv" checked />
    <label for="cgv">J'ai lu et j'accepte les conditions générales de vente</label>
    <?= isset($errors['cgv']) ? '<p style="color:red">' . $errors['cgv'] . '</p>' : "" ?>
    <small></small>
</div>

<button type="submit" class="register_send-button">Envoyer</button>
        </form>
    </div>
</header>