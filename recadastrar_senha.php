<?php  
session_start();  
$message = '';  

if ($_SERVER['REQUEST_METHOD'] === 'POST') {  
    $login = $_POST['login'] ?? '';  
    $senha_atual = $_POST['senha_atual'] ?? '';  
    $senha_nova = $_POST['senha_nova'] ?? '';  
    $senha_nova_confirm = $_POST['senha_nova_confirm'] ?? '';  

    if ($senha_nova !== $senha_nova_confirm) {  
        $message = "As senhas novas não conferem.";  
    } else {  
        $conn = new mysqli('localhost', 'usuario_bd', 'senha_bd', 'nome_bd');  

        if ($conn->connect_error) {  
            die("Erro no banco de dados: " . $conn->connect_error);  
        }  

        // Buscar o usuário  
        $stmt = $conn->prepare("SELECT senha FROM usuarios WHERE login=?");  
        $stmt->bind_param("s", $login);  
        $stmt->execute();  
        $stmt->bind_result($senha_hash);  
        if ($stmt->fetch()) {  
            $stmt->close();  

            // Verifica a senha atual (MD5 no nosso exemplo)  
            if (md5($senha_atual) === $senha_hash) {  
                // Atualiza a senha  
                $nova_senha_hash = md5($senha_nova);  
                $update = $conn->prepare("UPDATE usuarios SET senha = ? WHERE login = ?");  
                $update->bind_param("ss", $nova_senha_hash, $login);  
                if ($update->execute()) {  
                    $message = "Senha atualizada com sucesso!";  
                } else {  
                    $message = "Erro ao atualizar a senha.";  
                }  
                $update->close();  
            } else {  
                $message = "Senha atual incorreta.";  
            }  
        } else {  
            $message = "Usuário não encontrado.";  
        }  

        $conn->close();  
    }  
}  
