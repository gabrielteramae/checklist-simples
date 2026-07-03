package com.gabrielteramae.todoapi.service;

import com.gabrielteramae.todoapi.dto.TaskRequest;
import com.gabrielteramae.todoapi.dto.TaskResponse;
import com.gabrielteramae.todoapi.dto.TaskStatusUpdateRequest;
import com.gabrielteramae.todoapi.exception.TaskNotFoundException;
import com.gabrielteramae.todoapi.model.Task;
import com.gabrielteramae.todoapi.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository repository;

    public TaskServiceImpl(TaskRepository repository) {
        this.repository = repository;
    }

    @Override
    public TaskResponse create(TaskRequest request) {
        Task task = new Task();
        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        Task saved = repository.save(task);
        return TaskResponse.fromEntity(saved);
    }

    @Override
    public List<TaskResponse> findAll() {
        return repository.findAll().stream()
                .map(TaskResponse::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public TaskResponse findById(Long id) {
        Task task = repository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
        return TaskResponse.fromEntity(task);
    }

    @Override
    public TaskResponse updateStatus(Long id, TaskStatusUpdateRequest request) {
        Task task = repository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));
        task.setStatus(request.getStatus());
        Task saved = repository.save(task);
        return TaskResponse.fromEntity(saved);
    }

    @Override
    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new TaskNotFoundException(id);
        }
        repository.deleteById(id);
    }
}
