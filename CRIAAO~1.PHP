<?php
$host = "localhost";
$usuario = "root";
$senha = "sua_senha";
$banco = "nome_do_banco";

$conn = new mysqli($host, $usuario, $senha, $banco);
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mensagem = trim($_POST["mensagem"]);

    if (!empty($mensagem)) {
        $stmt = $conn->prepare("INSERT INTO mensagens (mensagem) VALUES (?)");
        $stmt->bind_param("s", $mensagem);
        $stmt->execute();
        $stmt->close();

        echo "Mensagem salva com sucesso!";
    } else {
        echo "Mensagem vazia.";
    }
}

$conn->close();
?>
