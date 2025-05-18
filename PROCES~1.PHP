<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mensagem = trim($_POST["mensagem"]);

    if (!empty($mensagem)) {
        // 1. Salvar em um arquivo (opcional)
        file_put_contents("mensagens.txt", date("Y-m-d H:i:s") . " - $mensagem\n", FILE_APPEND);

        // 2. Enviar por e-mail (opcional)
        /*
        mail("seuemail@exemplo.com", "Nova mensagem do site", $mensagem);
        */

        // 3. Mensagem de sucesso
        echo "Mensagem recebida com sucesso!";
    } else {
        echo "A mensagem não pode estar vazia.";
    }
} else {
    echo "Requisição inválida.";
}
?>

