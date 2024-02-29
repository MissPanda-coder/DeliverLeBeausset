<?php

const LOGIN_ERROR_REQUIRED = "Veuillez renseigner ce champ";
const LOGIN_ERROR_EMAIL = "L'email n'est pas valide";
const LOGIN_SUCCESS_MESSAGE = "Vous êtes connecté."; 

$errors_login = []; 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) { 
    $_POST = filter_input_array(INPUT_POST, [
        'email' => FILTER_SANITIZE_EMAIL, 
        'password' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
    ]);

    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    if (!$email) {
        $errors_login['email'] = LOGIN_ERROR_REQUIRED;
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors_login['email'] = LOGIN_ERROR_EMAIL;
    }

    if (!$password) {
        $errors_login['password'] = LOGIN_ERROR_REQUIRED;
    }

    if (empty($errors_login)) {
        
    }
}

if (!empty($errors_login)) {
    foreach ($errors_login as $error_field => $error_message) {
        echo "$error_field : $error_message <br>";
    }
}

if (isset($success_message)) {
    echo $success_message;
}
?>





