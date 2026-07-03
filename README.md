# Checklist Simples

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
