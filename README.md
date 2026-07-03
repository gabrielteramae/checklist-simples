# Checklist Simples em Java

API REST CRUD para gerenciamento de tarefas.

## Sobre

API simples e bem estruturada para criar, listar, atualizar o status e excluir tarefas. Construída com Java e Spring Boot, seguindo separação em camadas (Controller → Service → Repository).

## Funcionalidades

- Criar tarefa
- Listar tarefas
- Buscar tarefa por id
- Atualizar status da tarefa
- Excluir tarefa
- Validação de entrada com mensagens em português
- Tratamento global de erros com respostas padronizadas

## Stack

- Java 17
- Spring Boot 3.3
- Spring Data JPA
- H2 (banco local em arquivo, persiste entre execuções)
- MySQL (opcional, via profile)
- Bean Validation

## Como rodar localmente

Pré-requisitos: Java 17+ e Maven.

```bash
mvn spring-boot:run
```

A API sobe em `http://localhost:8080`. O banco H2 é criado automaticamente em `./data/tododb`.

Console do H2 (visualizar dados no browser): `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:file:./data/tododb`
- Usuário: `sa`
- Senha: (em branco)

### Usando MySQL em vez de H2

1. Crie o banco: `CREATE DATABASE tododb;`
2. Ajuste usuário/senha em `application-mysql.properties`
3. Rode: `mvn spring-boot:run -Dspring-boot.run.profiles=mysql`

## Endpoints

| Método   | Rota                     | Descrição                  |
| -------- | ------------------------ | --------------------------- |
| `POST`   | `/api/tasks`             | Cria uma nova tarefa        |
| `GET`    | `/api/tasks`              | Lista todas as tarefas      |
| `GET`    | `/api/tasks/{id}`         | Busca uma tarefa por id     |
| `PATCH`  | `/api/tasks/{id}/status`  | Atualiza o status da tarefa |
| `DELETE` | `/api/tasks/{id}`         | Exclui uma tarefa           |

### Criar tarefa

```
POST /api/tasks
Content-Type: application/json

{
  "title": "Estudar Spring Boot",
  "description": "Revisar conceitos de JPA e validação"
}
```

### Atualizar status

```
PATCH /api/tasks/1/status
Content-Type: application/json

{
  "status": "DONE"
}
```

Valores possíveis: `PENDING`, `IN_PROGRESS`, `DONE`

## Estrutura do projeto

```
src/main/java/com/gabrielteramae/todoapi/
├── controller/     # endpoints REST
├── dto/            # objetos de request e response
├── exception/      # exceções customizadas e handler global
├── model/          # entidade Task e enum TaskStatus
├── repository/     # interface JPA
└── service/        # regras de negócio
```
