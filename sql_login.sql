

  -- Criação do banco de dados, se não existir
CREATE DATABASE IF NOT EXISTS login;

-- Seleciona o banco de dados
USE login;

-- Criação da tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (  
    id INT AUTO_INCREMENT PRIMARY KEY,  
    login VARCHAR(50) UNIQUE NOT NULL,  
    senha VARCHAR(255) NOT NULL  
);  

-- Inserção de usuários com senha criptografada com MD5 (não recomendado em produção)
INSERT INTO usuarios (login, senha) VALUES ('admin', MD5('1234'));
INSERT INTO usuarios (login, senha) VALUES ('user', MD5('1234'));
INSERT INTO usuarios (login, senha) VALUES ('cliente', MD5('1234'));
INSERT INTO usuarios (login, senha) VALUES ('proprietario', MD5('1234'));
INSERT INTO usuarios (login, senha) VALUES ('locatario', MD5('1234'));
INSERT INTO usuarios (login, senha) VALUES ('locador', MD5('1234'));

