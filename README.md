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
```bash
mvn spring-boot:run
