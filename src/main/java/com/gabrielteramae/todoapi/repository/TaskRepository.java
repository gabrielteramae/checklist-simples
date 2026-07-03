package com.gabrielteramae.todoapi.repository;

import com.gabrielteramae.todoapi.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
