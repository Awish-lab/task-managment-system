document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    
    li.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    
    taskInput.value = ""; // Clear the input field
}
