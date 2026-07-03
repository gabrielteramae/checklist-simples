# Checklist Simples (To-Do List API)

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3-brightgreen)

API REST CRUD para gerenciamento de tarefas.

## Sobre

API simples e bem estruturada para criar, listar, atualizar o status e excluir tarefas. Construída com **Java** e **Spring Boot**, seguindo a separação em camadas (`Controller` → `Service` → `Repository`).

## Funcionalidades

- Criar tarefa
- Listar tarefas
- Buscar tarefa por ID
- Atualizar status da tarefa
- Excluir tarefa
- Validação de entrada com mensagens em português
- Tratamento global de erros com respostas padronizadas

## Stack

- **Java 17**
- **Spring Boot 3.3**
- **Spring Data JPA**
- **H2 Database** (banco local em arquivo, persiste entre execuções)
- **MySQL** (opcional, via profile)
- **Bean Validation**

---

## Como rodar localmente

**Pré-requisitos:** Java 17+ e Maven instalados.

Para rodar com o banco H2 padrão, execute na raiz do projeto:

mvn spring-boot:run

A API subirá em http://localhost:8080. O banco H2 é criado automaticamente na pasta ./data/tododb.

**Acesso ao Console do H2 (visualizar dados no browser):**
- **URL:** http://localhost:8080/h2-console
- **JDBC URL:** jdbc:h2:file:./data/tododb
- **Usuário:** sa
- **Senha:** (deixe em branco)

### Usando MySQL em vez de H2

1. Crie o banco de dados no seu MySQL: CREATE DATABASE tododb;
2. Ajuste o usuário e senha no arquivo application-mysql.properties.
3. Rode o projeto ativando o profile do MySQL:

mvn spring-boot:run -Dspring-boot.run.profiles=mysql

---

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/api/tasks` | Cria uma nova tarefa |
| `GET` | `/api/tasks` | Lista todas as tarefas |
| `GET` | `/api/tasks/{id}` | Busca uma tarefa por ID |
| `PATCH` | `/api/tasks/{id}/status` | Atualiza o status da tarefa |
| `DELETE` | `/api/tasks/{id}` | Exclui uma tarefa |

### Exemplos de Requisição

**Criar tarefa** (`POST /api/tasks`)

{
  "title": "Estudar Spring Boot",
  "description": "Revisar conceitos de JPA e validação"
}

**Atualizar status** (`PATCH /api/tasks/1/status`)

{
  "status": "DONE"
}

*Valores possíveis:* PENDING, IN_PROGRESS, DONE

---

## Estrutura do Projeto

src/main/java/com/gabrielteramae/todoapi/
├── controller/     # endpoints REST
├── dto/            # objetos de request e response
├── exception/      # exceções customizadas e handler global
├── model/          # entidade Task e enum TaskStatus
├── repository/     # interface JPA
└── service/        # regras de negócio
