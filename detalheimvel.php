<?php
$nome = $_POST['nome'];
$email = $_POST['email'];

$conn = new mysqli("localhost", "usuario", "senha", "banco_de_dados");

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

$sql = "INSERT INTO usuarios (nome, email) VALUES ('$nome', '$email')";
$conn->query($sql);

$conn->close();
?>