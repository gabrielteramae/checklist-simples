function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

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
            <span>${escapeHtml(task.title)}</span>
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

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, description: "" })
    });

    if (!response.ok) {
        alert("Não foi possível salvar a tarefa.");
        return;
    }

    titleInput.value = '';
    loadTasks();
}

async function completeTask(id) {
    const response = await fetch(`${API_URL}/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: "DONE" })
    });
    if (!response.ok) {
        alert("Não foi possível concluir a tarefa.");
        return;
    }
    loadTasks();
}

async function deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) {
        alert("Não foi possível excluir a tarefa.");
        return;
    }
    loadTasks();
}