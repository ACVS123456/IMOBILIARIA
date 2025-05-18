<?php
$host = "localhost";
$user = "root";
$senha = ""; // padrão do XAMPP
$banco = "imobiliaria";

// Conecta ao banco
$conn = new mysqli($host, $user, $senha, $banco);

// Verifica conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Recebe os dados do formulário
$imovel = $_POST['imovel'];
$comentario = $_POST['comentario'];

// Prepara e insere no banco
$stmt = $conn->prepare("INSERT INTO avaliacoes (imovel, comentario) VALUES (?, ?)");
$stmt->bind_param("ss", $imovel, $comentario);

if ($stmt->execute()) {
    echo "Avaliação salva com sucesso!";
} else {
    echo "Erro: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
