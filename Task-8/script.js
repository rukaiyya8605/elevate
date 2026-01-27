// Select DOM elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Tasks array to hold task objects { id, text, completed }
let tasks = [];

// Load tasks from localStorage if present
const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
  tasks = JSON.parse(savedTasks);
  renderTasks();
}

// Function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks in the UI
function renderTasks() {
  taskList.innerHTML = ''; // Clear existing list

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    if (task.completed) {
      li.classList.add('completed');
    }

    // Task text span (toggle complete on click)
    const span = document.createElement('span');
    span.textContent = task.text;
    span.addEventListener('click', () => {
      toggleComplete(task.id);
    });
    li.appendChild(span);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'action-btn';
    deleteBtn.addEventListener('click', () => {
      deleteTask(task.id);
    });
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

// Add task function with validation
function addTask() {
  const text = taskInput.value.trim();
  if (text === '') {
    alert('Task cannot be empty!');
    return;
  }

  const newTask = {
    id: Date.now(), // unique id
    text,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  taskInput.value = '';
  taskInput.focus();
}

// Toggle task completed status
function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  renderTasks();
}

// Delete task function
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

// Event listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    addTask();
  }
});
