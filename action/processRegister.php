<?php
const ERROR_REQUIRED = "Veuillez renseigner ce champ";
const ERROR_NAME = "Le nom doit avoir au moins 2 caractères et ne doit pas contenir de chiffre";
const ERROR_FIRSTNAME = "Le nom doit avoir au moins 2 caractères et ne doit pas contenir de chiffre";
const ERROR_STREETNUMBER = "Le numéro de la voie ne doit contenir que des chiffres";
const ERROR_STREET = "Le nom de la voie doit avoir au moins 2 caractères et ne doit pas contenir de chiffre";
const ERROR_POSTALCODE = "Ne pas modifier le code postal, vous devez résider au Beausset pour pouvoir utiliser la plateforme";
const ERROR_CITY = "Ne pas modifier la ville, vous devez résider au Beausset pour pouvoir utiliser la plateforme";
const ERROR_PHONE = "Le numéro de portable doit contenir 10 chiffres";
const ERROR_EMAIL_EXIST = "Cet email est déjà utilisé";
const ERROR_EMAIL = "L'email n'est pas valide";
const ERROR_PASSWORD = "Le mot de passe doit avoir au moins 8 caractères et contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial parmi ( !@#$%^&*)";
const ERROR_PASSWORD_CONFIRM = "Le mot de passe ne correspond pas";

$fields = [
    'name' => ['minLength' => 2, 'pattern' => '/^[a-zA-Z\s]+$/', 'error' => ERROR_NAME],
    'first-name' => ['minLength' => 2, 'pattern' => '/^[a-zA-Z\s]+$/', 'error' => ERROR_FIRSTNAME],
    'street_number' => ['pattern' => '/^\d+$/', 'error' => ERROR_STREETNUMBER],
    'street-name' => ['minLength' => 2, 'pattern' => '/^[a-zA-Z\s]+$/', 'error' => ERROR_STREET],
    'postal-code' => ['value' => '83330', 'error' => ERROR_POSTALCODE],
    'city' => ['value' => 'LE BEAUSSET', 'error' => ERROR_CITY],
    'phone' => ['pattern' => '/^\d{10}$/', 'error' => ERROR_PHONE],
    'email' => ['filter' => FILTER_VALIDATE_EMAIL, 'error' => ERROR_EMAIL],
    'password' => ['minLength' => 8, 'pattern' => '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/', 'error' => ERROR_PASSWORD],
    'password-confirm' => ['match' => 'password', 'error' => ERROR_PASSWORD_CONFIRM]
];

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_POST = filter_input_array(INPUT_POST, [
        'name' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'first-name' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'street-num' => FILTER_SANITIZE_NUMBER_INT,
        'street-name' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'postal-code' => FILTER_SANITIZE_NUMBER_INT,
        'city' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'phone' => FILTER_SANITIZE_NUMBER_INT,
        'email' => FILTER_SANITIZE_EMAIL,
        'password' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
        'password-confirm' => FILTER_SANITIZE_FULL_SPECIAL_CHARS
    ]);

    foreach ($fields as $field => $options) {
        $value = $_POST[$field] ?? '';
        if (!$value) {
            $errors[$field] = ERROR_REQUIRED;
        } elseif (isset($options['minLength']) && mb_strlen($value) < $options['minLength']) {
            $errors[$field] = $options['error'];
        } elseif (isset($options['pattern']) && !preg_match($options['pattern'], $value)) {
            $errors[$field] = $options['error'];
        } elseif (isset($options['value']) && $value !== $options['value']) {
            $errors[$field] = $options['error'];
        } elseif (isset($options['filter']) && !filter_var($value, $options['filter'])) {
            $errors[$field] = $options['error'];
        } elseif (isset($options['match']) && $value !== $_POST[$options['match']]) {
            $errors[$field] = $options['error'];
        }
    }

    // Vérification si l'email existe déjà dans la base de données
    $query = "SELECT COUNT(email) as count FROM user WHERE email = ?";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$email]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result['count'] > 0) {
        $errors['email'] = ERROR_EMAIL_EXIST;
    }
}
?>
