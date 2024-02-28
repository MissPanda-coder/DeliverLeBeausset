<?php


const ERROR_REQUIRED = "Veuillez renseigner ce champ";
const ERROR_EMAIL = "L'email n'est pas valide";
const SUCCESS_MESSAGE = "Un email de réinitialisation de mot de passe a été envoyé.";

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_POST = filter_input_array(INPUT_POST, [
        'email_forgot' => FILTER_SANITIZE_EMAIL,
    ]);

    $email_forgot = $_POST['email_forgot'] ?? '';

    if (!$email_forgot) {
        $errors['email_forgot'] = ERROR_REQUIRED;
    } 
    elseif (!filter_var($email_forgot, FILTER_VALIDATE_EMAIL)) {
        $errors['email_forgot'] = ERROR_EMAIL;
    } 
    else {
        $to = $email_forgot;
        $subject = "Réinitialisation de mot de passe";
        $message = "Cliquez sur ce lien pour réinitialiser votre mot de passe : [lien de réinitialisation]";
        $headers = "From: votre_email@example.com";

        if (mail($to, $subject, $message, $headers)) {
            $success_message = SUCCESS_MESSAGE;
        } else {
            $errors['email_forgot'] = "Une erreur s'est produite lors de l'envoi de l'email de réinitialisation.";
        }
    }
}


?>




