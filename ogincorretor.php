<?php
$mysqli = new mysqli("localhost", "root", "", "imobiliaria");

if ($mysqli->connect_error) {
    die("Erro de conexão: " . $mysqli->connect_error);
}

$login = 'corretor';
$senha = password_hash('1234', PASSWORD_DEFAULT);
$nome = 'Corretor de Teste';
$email = 'corretor@imob.com';

$stmt = $mysqli->prepare("INSERT INTO corretores (login, senha_hash, nome, email) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $login, $senha, $nome, $email);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Corretor inserido com sucesso!";
} else {
    echo "Erro ao inserir corretor.";
}

$stmt->close();
$mysqli->close();
?>
<?php
header('Content-Type: application/json');

$login = $_POST['login'] ?? '';
$senha = $_POST['senha'] ?? '';

$conn = new mysqli('localhost', 'root', '', 'imobiliaria');

if ($conn->connect_error) {
    echo json_encode(['sucesso' => false, 'erro' => 'Erro de conexão']);
    exit;
}

$stmt = $conn->prepare("SELECT senha_hash FROM corretores WHERE login = ?");
$stmt->bind_param("s", $login);
$stmt->execute();
$result = $stmt->get_result();

if ($usuario = $result->fetch_assoc()) {
    if (password_verify($senha, $usuario['senha_hash'])) {
        echo json_encode(['sucesso' => true]);
    } else {
        echo json_encode(['sucesso' => false, 'erro' => 'Senha incorreta']);
    }
} else {
    echo json_encode(['sucesso' => false, 'erro' => 'Usuário não encontrado']);
}

$stmt->close();
$conn->close();
?>
