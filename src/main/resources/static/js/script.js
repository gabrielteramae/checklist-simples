const API_URL = 'http://localhost:8080/api/tasks';

window.onload = loadTasks;

async function loadTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.status}`;

        li.innerHTML = `
            <span>${task.title}</span>
            <div>
                ${task.status !== 'DONE' ? `<button class="btn-done" onclick="completeTask(${task.id})">Concluir</button>` : ''}
                <button class="btn-delete" onclick="deleteTask(${task.id})">Excluir</button>
            </div>
        `;
        list.appendChild(li);
    });
}

async function createTask() {
    const titleInput = document.getElementById('taskTitle');
    const title = titleInput.value;

    if (!title) return alert("Digite um título!");

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, description: "" })
    });

    titleInput.value = '';
    loadTasks();
}

async function completeTask(id) {
    await fetch(`${API_URL}/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: "DONE" })
    });
    loadTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTasks();
}