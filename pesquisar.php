<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "imobiliaria";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

$localizacao = $_GET['localizacao'] ?? '';
$tipo = $_GET['tipo'] ?? '';
$preco = $_GET['preco'] ?? '';

$sql = "SELECT * FROM imoveis WHERE 1=1";

if ($localizacao) {
    $sql .= " AND localizacao LIKE '%" . $conn->real_escape_string($localizacao) . "%'";
}
if ($tipo) {
    $sql .= " AND tipo = '" . $conn->real_escape_string($tipo) . "'";
}
if ($preco) {
    $sql .= " AND preco <= " . floatval($preco);
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<h3>" . $row['titulo'] . "</h3>";
        echo "<p>" . $row['descricao'] . "</p>";
        echo "<p>Localização: " . $row['localizacao'] . "</p>";
        echo "<p>Preço: R$ " . $row['preco'] . "</p><hr>";
    }
} else {
    echo "Nenhum imóvel encontrado.";
}

$conn->close();
?>
