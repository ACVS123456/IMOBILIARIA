CREATE DATABASE imobiliaria;

USE imobiliaria;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

USE imobiliaria;

INSERT INTO usuarios (login, email, senha)
VALUES ('antonio1234', 'antonio@email.com', '1234');

