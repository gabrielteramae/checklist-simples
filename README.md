# Checklist — tarefas com H2 local e perfil MySQL

![Java](https://img.shields.io/badge/Java-17-007396?logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.3.5-6DB33F?logo=springboot&logoColor=white)
![H2](https://img.shields.io/badge/H2-Database-000000)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)

API de tarefas (título, descrição, status) com página estática no mesmo processo. O perfil padrão grava em H2 em arquivo. MySQL só entra se a aplicação subir com o profile `mysql`.

## Por que dois bancos

| Perfil | Onde grava | Quando |
| --- | --- | --- |
| padrão (`application.properties`) | `jdbc:h2:file:./data/tododb` | desenvolvimento, sem servidor de banco |
| `mysql` (`application-mysql.properties`) | `jdbc:mysql://localhost:3306/tododb`, usuário `root`, senha vazia | quando o banco `tododb` já existe |

Os dois usam `spring.jpa.hibernate.ddl-auto=update`. Não há migration versionada. A senha vazia do profile MySQL está no arquivo; não serve para ambiente compartilhado.

O status nasce `PENDING` e só muda por `PATCH`. Valores: `PENDING`, `IN_PROGRESS`, `DONE`.

## Stack

- Java 17, Spring Boot 3.3.5
- Spring Web, Data JPA, Validation, Actuator
- springdoc-openapi 2.5.0 (UI no caminho padrão da lib, `/swagger-ui/index.html`; o projeto não redefine)
- H2 e MySQL Connector/J
- HTML, CSS e JS em `src/main/resources/static` (sem framework)
- GitHub Actions: `mvn -B package` em push e pull request para `main`

## Estrutura

```
pom.xml
.github/workflows/maven.yml
src/main/java/com/gabrielteramae/todoapi/
├── TodoApiApplication.java
├── controller/TaskController.java      # /api/tasks
├── service/TaskServiceImpl.java
├── repository/TaskRepository.java      # JpaRepository, sem query extra
├── model/Task.java
├── model/TaskStatus.java
├── dto/                                # request, response, troca de status
└── exception/GlobalExceptionHandler.java
src/main/resources/
├── application.properties              # H2 em arquivo, porta 8080
├── application-mysql.properties
└── static/                             # index.html, css/style.css, js/script.js
src/test/java/.../TodoApiApplicationTests.java
```

## Como rodar

Java 17 e Maven. Não há Dockerfile.

```bash
git clone https://github.com/gabrielteramae/checklist-simples.git
cd checklist-simples
mvn spring-boot:run
```

A UI abre em `http://localhost:8080/`. O console H2 fica em `/h2-console` (JDBC `jdbc:h2:file:./data/tododb`, usuário `sa`, senha vazia).

MySQL, depois de `CREATE DATABASE tododb`:

```bash
mvn spring-boot:run -Dspring-boot.run.profiles=mysql
```

## Endpoints

| Método | Rota | Resposta |
| --- | --- | --- |
| POST | `/api/tasks` | 201. `title` obrigatório (até 255), `description` opcional (até 1000) |
| GET | `/api/tasks` | lista |
| GET | `/api/tasks/{id}` | 404 se não existe |
| PATCH | `/api/tasks/{id}/status` | corpo `{"status":"PENDING"}`, `IN_PROGRESS` ou `DONE` |
| DELETE | `/api/tasks/{id}` | 204 |
| GET | `/h2-console` | console H2, só no perfil padrão |
| GET | `/actuator/health` | health do Actuator, exposição padrão da lib (não há config extra) |

`@CrossOrigin("*")` no controller. Validação e JSON ilegível voltam 400; tarefa ausente volta 404 com a mensagem `Tarefa não encontrada com id: ...`.

## Testes realizados

`TodoApiApplicationTests` só verifica se o contexto Spring sobe (`contextLoads`). Não chama o CRUD. O workflow `Java CI with Maven` roda `mvn -B package`, então esse teste entra no `package`.

```bash
mvn test
```

---

© 2026 Gabriel Teramae Chan
