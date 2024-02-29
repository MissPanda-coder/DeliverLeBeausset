<?php

const FORGOT_ERROR_REQUIRED = "Veuillez renseigner ce champ";
const FORGOT_ERROR_EMAIL = "L'email n'est pas valide";
const FORGOT_SUCCESS_MESSAGE = "Un email de réinitialisation de mot de passe a été envoyé.";

$errors_forgot = []; 

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['forgot'])) { // Vérifie si le formulaire "forgot" a été soumis
    $_POST = filter_input_array(INPUT_POST, [
        'email_forgot' => FILTER_SANITIZE_EMAIL
    ]);

    $email_forgot = $_POST['email_forgot'] ?? '';

    if (!$email_forgot) {
        $errors_forgot['email_forgot'] = FORGOT_ERROR_REQUIRED;
    } elseif (!filter_var($email_forgot, FILTER_VALIDATE_EMAIL)) {
        $errors_forgot['email_forgot'] = FORGOT_ERROR_EMAIL;
    } else {
        $to = $email_forgot;
        $subject = "Réinitialisation de mot de passe";
        $message = "Cliquez sur ce lien pour réinitialiser votre mot de passe : [lien de réinitialisation]";
        $headers = "From: votre_email@example.com";

        if (mail($to, $subject, $message, $headers)) {
            $success_message_forgot = FORGOT_SUCCESS_MESSAGE;
        } else {
            $errors_forgot['email_forgot'] = "Une erreur s'est produite lors de l'envoi de l'email de réinitialisation.";
        }
    }
}


if (!empty($errors_forgot)) {
    foreach ($errors_forgot as $error_field => $error_message) {
        echo "$error_field : $error_message <br>";
    }
}

if (isset($success_message_forgot)) {
    echo $success_message_forgot;
}
?>





