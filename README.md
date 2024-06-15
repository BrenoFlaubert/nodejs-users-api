# API com Node, TypeScript & MongoDB

## Descrição do Projeto

Este projeto é uma API RESTful para a criação, deleção, atualização e listagem de usuários. Os usuários possuem as seguintes propriedades: `firstName`, `lastName`, `password` e `email`. O objetivo do projeto é demonstrar o uso das tecnologias e conceitos listados abaixo:

- Princípios de SOLID
- Express
- Node.js
- MongoDB
- Docker Compose
- Repository Pattern
- Dependency Injection

## Tecnologias e Conceitos Utilizados

### Node.js e Express

O Node.js é utilizado como ambiente de execução do JavaScript no servidor. O Express é o framework web utilizado para criar a API.

### MongoDB

O MongoDB é o banco de dados NoSQL utilizado para armazenar os dados dos usuários.

### Docker Compose

O Docker Compose é utilizado para orquestrar contêineres Docker, facilitando a configuração e execução dos serviços da aplicação, como a API e o banco de dados.

### Repository Pattern

O Repository Pattern é utilizado para abstrair as operações de acesso aos dados, facilitando a manutenção e a troca de implementações de persistência de dados.

### Dependency Injection

A injeção de dependências é utilizada para desacoplar as classes e facilitar a manutenção e os testes.

### Princípios de SOLID

Os princípios de SOLID são seguidos para garantir um código de alta qualidade, fácil manutenção e extensível.

## Endpoints da API

### Listar Usuários

- **Endpoint**: `GET /users`
- **Descrição**: Retorna a lista de todos os usuários.

### Criar Usuário

- **Endpoint**: `POST /users`
- **Descrição**: Cria um novo usuário.
- **Body**:
    
    ```json
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "password": "password123"
    }
    
    ```
    

### Atualizar Usuário

- **Endpoint**: `PATCH /users/:id`
- **Descrição**: Atualiza os dados de um usuário existente.
- **Body**:
    
    ```json
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "password": "newpassword123"
    }
    
    ```
    

### Deletar Usuário

- **Endpoint**: `DELETE /users/:id`
- **Descrição**: Deleta um usuário existente.