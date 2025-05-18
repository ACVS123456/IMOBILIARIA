create database cadastro_de_novos_clientes
use cadastro_de_novos_clientes

CREATE TABLE usuarios (  
    id INT AUTO_INCREMENT PRIMARY KEY,  
    nome VARCHAR(100) NOT NULL,  
    email VARCHAR(100) NOT NULL UNIQUE,  
    login VARCHAR(50) NOT NULL UNIQUE,  
    senha VARCHAR(255) NOT NULL  
);  

INSERT INTO usuarios (id, nome, email, login, senha) VALUES ('admin', MD5('1234'));
INSERT INTO usuarios (id, nome, email, login, senha) VALUES ('user', MD5('1234'));
INSERT INTO usuarios (id, nome, email, login, senha) VALUES ('cliente', MD5('1234'));
INSERT INTO usuarios (id, nome, email, login, senha) VALUES ('proprietario', MD5('1234'));
INSERT INTO usuarios (id, nome, email, login, senha) VALUES ('locatario', MD5('1234'));
