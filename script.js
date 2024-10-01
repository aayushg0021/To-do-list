// Select the necessary elements
const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const todoList = document.getElementById('todoList');

// Event listener for adding a task
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskValue = taskInput.value;
    const dateValue = dateInput.value;

    if (taskValue === '' || dateValue === '') {
        alert("Please enter both a task and a date.");
        return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    // Add the task and date to the list item
    li.innerHTML = `${taskValue} <span class="badge bg-secondary">${dateValue}</span> <button class="delete-btn">Delete</button>`;

    // Add delete functionality to the button
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Add the task to the todo list
    todoList.appendChild(li);

    // Clear the input fields
    taskInput.value = '';
    dateInput.value = '';
}
