const addBtn = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

