<header>
    <nav class="navbar">
        <div class="navbar-logo">
            <a href="admin"><img src="./public/favicon/favicon-32x32.png" decoding="async" alt="Logo de Deliver représentant un jeune homme en scooter en livraison"></a>
        </div>
        <div class="hamburger">
            <div class="hamburger-line1"></div>
            <div class="hamburger-line2"></div>
            <div class="hamburger-line3"></div>
        </div>
        <ul class="nav-links">
            <li><a href="index.php">Accueil</a></li>
            <li><a href="shops">Boutiques</a></li>
            <li><a href="about">A propos</a></li>
            <li><button class="login-button" href="login">
                Se connecter
            </button></li>
            <a href="cart" class="cart-span"><img class="cart-img" src="./public/img/outils/panierb.png" alt="image d'un panier pour passer commande"></a>
        </ul>
    </nav>

    <div id="login">
    <form id="loginForm" action="processLogIn.php" name="login" method="POST">
        <h2 class="text-secondary">Connexion</h2>
        <div class="form-field text-secondary">
            <label for="email-login">Email</label>
            <input type="email" name="email-login" id="email-login" value="<?= isset($email_login) ? htmlspecialchars($email_login) : "" ?>">
            <?= isset($errors['email-login']) ? '<p style="color:red">' . $errors['email-login'] . '</p>' : "" ?>
            <small></small>
        </div>

        <div class="form-field text-secondary">
            <label for="password-login">Mot de passe</label>
            <input type="password" name="password-login" id="password-login" class="password-eye" toggle>
            <?= isset($errors['password-login']) ? '<p style="color:red">' . $errors['password-login'] . '</p>' : "" ?>
            <i toggle="password-field" class="fa fa-eye-slash field-icon-login toggle-password"></i>
            <small></small>
        </div>
        <div class="form-field-center">
            <button type="submit" class="login-button">Connexion</button>
            <a href="#" class="forgot-password text-secondary">Mot de passe oublié ?</a>
            <a class="register-button text-secondary" href="#">Pas encore inscrit ? Inscrivez-vous ici</a>
        </div> 
    </form>
</div>
</div>

<div id="forgotPassword">
    <form id="forgotPasswordForm" action="processFPw.php" method="POST" name="forgot">
        <h2 class="text-secondary">Mot de passe oublié</h2>
        <div class="form-field">
            <label for="email-forgot">Email</label>
            <input type="email" name="email-forgot" id="email-forgot" value="<?= isset($email_forgot) ? $email_forgot : '' ?>">
            <?= isset($errors['email-forgot']) ? '<p style="color:red">' . $errors['email-forgot'] . '</p>' : "" ?>
            <?= isset($success_message) ? '<p style="color:green">' . $success_message . '</p>' : "" ?>
            <small></small>
        </div>
        <button type="submit" class="forgot-button">Envoyer</button>
    </form>
</div>

    <div id="register">
        <form id="registerForm" action="processRegister.php" method="POST" name="register">
            <h2 class="text-secondary">Inscription</h2>
            <div class="form-field">
                <label for="name">Nom</label>
                <input type="text" class="text-secondary" name="name" id="name" required autocomplete="off" value="<?= isset($name) ? $name : '' ?>">
                <?= isset($errors['name']) ? '<p style="color:red">' . $errors['name'] . '</p>' : "" ?>
                <small></small>
            </div>
            <div class="form-field">
                <label for="first-name">Prénom</label>
                <input type="text" class="text-secondary" name="first-name" required autocomplete="off" id="first-name" value="<?= isset($first_name) ? $first_name : '' ?>">
                <?= isset($errors['first-name']) ? '<p style="color:red">' . $errors['first-name'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form-field">
                <label for="street-num">Numéro de rue</label>
                <input type="text" class="text-secondary" name="street-num" required autocomplete="off" id="street-num" value="<?= isset($street_number) ? $street_number : '' ?>">
                <?= isset($errors['street-num']) ? '<p style="color:red">' . $errors['street-num'] . '</p>' : "" ?>
                <small></small>
            </div>
            <div class="form-field">
                <label for="street-name">Nom de rue</label>
                <input type="text" class="text-secondary" autocomplete="off" required name="street-name" id="street-name" value="<?= isset($street_name) ? $street_name : '' ?>">
                <?= isset($errors['street-name']) ? '<p style="color:red">' . $errors['street-name'] . '</p>' : "" ?>
                <small></small>
            </div>
            <div class="form-field">
                <label for="postal-code">Code postal</label>
                <input type="text" class="text-secondary" name="postal-code" required id="postal-code" value="<?= isset($postal_code) ? $postal_code : '83330' ?>">
                <?= isset($errors['postal-code']) ? '<p style="color:red">' . $errors['postal-code'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form-field">
                <label for="city">Ville</label>
                <input type="text" class="text-secondary" name="city" id="city" value="<?= isset($city) ? htmlspecialchars($city) : 'LE BEAUSSET' ?>">
                <?= isset($errors['city']) ? '<p style="color:red">' . $errors['city'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form-field">
                <label for="phone">Téléphone</label>
                <input type="tel" required autocomplete="off" class="text-secondary" name="phone" id="phone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" value="<?= isset($phone) ? htmlspecialchars($phone) : '' ?>">
                <?= isset($errors['phone']) ? '<p style="color:red">' . $errors['phone'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form-field">
                <label for="dob" class="text-secondary">Date de naissance</label>
                <input type="date" required name="dob" id="dob" class="text-secondary" value="<?= isset($dob) ? htmlspecialchars($dob) : '' ?>">
                <?= isset($errors['dob']) ? '<p style="color:red">' . $errors['dob'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form-field">
                <label for="email">Email</label>
                <input type="email" required class="text-secondary" autocomplete="off" name="email" id="email" value="<?= isset($email) ? htmlspecialchars($email) : '' ?>">
                <?= isset($errors['email']) ? '<p style="color:red">' . $errors['email'] . '</p>' : "" ?>
                <small></small>
            </div>

            <div class="form-field">
                <label for="password">Mot de passe</label>
                <input type="password" required class="text-secondary" autocomplete="off" name="password" id="password" toggle="">
                <?= isset($errors['password']) ? '<p style="color:red">' . $errors['password'] . '</p>' : "" ?>
                <i toggle="password-field" class="fa fa-eye-slash field-icon-register toggle-password"></i>
                <small></small>
            </div>
            <div class="form-field">
    <label for="password-confirm">Confirmez le mot de passe</label>
    <input type="password" required class="text-secondary" name="password-confirm" id="password-confirm" autocomplete="off">
    <?= isset($errors['password-confirm']) ? '<p style="color:red">' . $errors['password-confirm'] . '</p>' : "" ?>
    <small></small>
</div>

<div class="form-field-checkobox">
    <input type="checkbox" id="cgv" name="cgv" class="checkbox" required/>
    <label for="cgv" class="text-secondary" >J'ai lu et j'accepte les conditions générales de vente</label>
    <?= isset($errors['cgv']) ? '<p style="color:red">' . $errors['cgv'] . '</p>' : "" ?>
    <small></small>
</div>

<button type="submit" class="register-send-button">Envoyer</button>
        </form>
    </div>
</header>