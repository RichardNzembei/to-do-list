function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") return;
    
    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);
    
    taskInput.value = "";
}

// Function to mark a task as complete
function toggleComplete(element) {
    element.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(element) {
    element.parentNode.remove();
}

// Event listener for adding a task
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});