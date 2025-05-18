<?php
$senha = "minhaSenha123"; // sua senha desejada
$hash = password_hash($senha, PASSWORD_DEFAULT);
echo $hash;
