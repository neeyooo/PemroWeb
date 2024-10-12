let taskList = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
  };

  taskList.push(task);
  renderTasks();
  taskInput.value = "";
}

function renderTasks() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  taskList.forEach(task => {
    const li = document.createElement("li");
    const taskText = document.createTextNode(task.text);
    li.appendChild(taskText);

    // Add edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.style.marginRight = "10px";
    editButton.onclick = () => editTask(task.id);
    li.appendChild(editButton);

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => deleteTask(task.id);
    li.appendChild(deleteButton);

    taskListElement.appendChild(li);
  });
}

function editTask(taskId) {
  const task = taskList.find(task => task.id === taskId);
  const newText = prompt("Edit your task", task.text);
  if (newText !== null && newText.trim() !== "") {
    task.text = newText.trim();
    renderTasks();
  }
}

function deleteTask(taskId) {
  taskList = taskList.filter(task => task.id !== taskId);
  renderTasks();
}
