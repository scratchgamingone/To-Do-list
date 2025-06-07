function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskInput.value}
            <button onclick="this.parentElement.remove()">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}