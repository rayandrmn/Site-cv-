<?php
if(isset($_POST['message'])){
    $retour = mail('rayandevdrmn@gmail.com', 'Envoi depuis la page Contact', $_POST['message'], $_POST['email']. "\r\n" ."Reply-to:" . $_POST["email"]);
    if ($retour)
        echo '<p>Votre message a bien été envoyé.</p>';
}
    
    ?>