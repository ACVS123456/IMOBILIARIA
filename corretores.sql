CREATE DATABASE imobiliaria CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE imobiliaria;

CREATE TABLE corretores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    nome VARCHAR(100),
    email VARCHAR(100)
);
