<?php
header('Content-Type: application/json');

// Simulação de login com banco de dados
$login = $_POST['login'] ?? '';
$senha = $_POST['senha'] ?? '';

// Aqui você faria a verificação real com banco de dados (MySQL, etc)
$loginCorreto = 'corretor';
$senhaCorreta = '1234';

if ($login === $loginCorreto && $senha === $senhaCorreta) {
    echo json_encode(['sucesso' => true]);
} else {
    echo json_encode(['sucesso' => false]);
}
