package com.gabrielteramae.todoapi.service;

import com.gabrielteramae.todoapi.dto.TaskRequest;
import com.gabrielteramae.todoapi.dto.TaskResponse;
import com.gabrielteramae.todoapi.dto.TaskStatusUpdateRequest;

import java.util.List;

public interface TaskService {

    TaskResponse create(TaskRequest request);

    List<TaskResponse> findAll();

    TaskResponse findById(Long id);

    TaskResponse updateStatus(Long id, TaskStatusUpdateRequest request);

    void delete(Long id);
}
