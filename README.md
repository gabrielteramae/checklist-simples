# Checklist Simples (To-Do List API)

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

Aplicação Full-Stack com API REST CRUD e interface web para gerenciamento de tarefas.

## Sobre

Uma solução simples e bem estruturada para criar, listar, atualizar o status e excluir tarefas. O backend foi construído com **Java** e **Spring Boot** (seguindo a separação em camadas `Controller` → `Service` → `Repository`), enquanto o frontend é servido diretamente pela aplicação através da pasta estática, utilizando HTML, CSS e JavaScript Vanilla.

## Funcionalidades

- Interface web amigável e responsiva integrada ao servidor
- Criar tarefa
- Listar tarefas
- Buscar tarefa por ID
- Atualizar status da tarefa (PENDING, IN_PROGRESS, DONE)
- Excluir tarefa
- Validação de entrada com mensagens em português no backend
- Tratamento global de erros com respostas padronizadas
- Documentação interativa da API com Swagger UI / OpenAPI

## Stack

- **Backend:** Java 17, Spring Boot 3.3, Spring Data JPA, Bean Validation
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Banco de Dados:** H2 Database (banco local em arquivo, persiste entre execuções) / MySQL (opcional, via profile)

---

## Como rodar localmente

**Pré-requisitos:** Java 17+ e Maven instalados.

Para rodar com o banco H2 padrão, execute na raiz do projeto:

```bash
mvn spring-boot:run
```

Acesse no seu navegador:
- **Interface Web:** http://localhost:8080 (Carrega automaticamente a tela principal)
- **Documentação Swagger:** http://localhost:8080/swagger-ui.html

O banco H2 é criado automaticamente na pasta `./data/tododb`.

**Acesso ao Console do H2 (visualizar dados no browser):**
- **URL:** http://localhost:8080/h2-console
- **JDBC URL:** `jdbc:h2:file:./data/tododb`
- **Usuário:** sa
- **Senha:** *(deixe em branco)*

### Usando MySQL em vez de H2

1. Crie o banco de dados no seu MySQL: `CREATE DATABASE tododb;`
2. Ajuste o usuário e senha no arquivo `application-mysql.properties`.
3. Rode o projeto ativando o profile do MySQL:

```bash
mvn spring-boot:run -Dspring-boot.run.profiles=mysql
```

---

## Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/api/tasks` | Cria uma nova tarefa |
| `GET` | `/api/tasks` | Lista todas as tarefas |
| `GET` | `/api/tasks/{id}` | Busca uma tarefa por ID |
| `PATCH` | `/api/tasks/{id}/status` | Atualiza o status da tarefa |
| `DELETE` | `/api/tasks/{id}` | Exclui uma tarefa |

### Exemplos de Requisição

**Criar tarefa** (`POST /api/tasks`)

```json
{
  "title": "Estudar Spring Boot",
  "description": "Revisar conceitos de JPA e validação"
}
```

**Atualizar status** (`PATCH /api/tasks/1/status`)

```json
{
  "status": "DONE"
}
```

*Valores possíveis:* `PENDING`, `IN_PROGRESS`, `DONE`

---

## Estrutura do Projeto

```text
src/main/
├── java/com/gabrielteramae/todoapi/
│   ├── controller/      # Endpoints REST
│   ├── dto/             # Objetos de transferência de dados (Request/Response)
│   ├── exception/       # Tratamento global de erros
│   ├── model/           # Entidades do banco de dados (JPA)
│   ├── repository/      # Interfaces de acesso ao banco
│   └── service/         # Regras de negócio
└── resources/
    ├── static/          # Arquivos do Frontend
    │   ├── css/
    │   │   └── style.css
    │   ├── js/
    │   │   └── script.js
    │   └── index.html   # Página inicial servida em /
    ├── application.properties
    └── application-mysql.properties
```
