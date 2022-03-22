/* eslint-disable sonarjs/no-duplicate-string */
// Creating task button rules
const createTaskButton = document.querySelector('#criar-tarefa');
const taskListInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Function to add a task to the list
function addTask(message) {
  if (!message) {
    window.alert('Invalid or blank input field');
    return;
  }

  const createdItemList = document.createElement('li');
  createdItemList.innerText = message;

  taskList.appendChild(createdItemList);

  taskListInput.value = '';
}

createTaskButton.addEventListener('click', () => addTask(taskListInput.value));

taskListInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && taskListInput.value) {
    addTask(taskListInput.value);
  } else if (event.key === 'Enter' && !taskListInput.value) {
    window.alert('Invalid or blank input field');
  }
});

// Changing list item color on click and setting only one item coloured per click
function grayLineOnClick(event) {
  const selectedTask = document.querySelector('.selected-task');

  if (selectedTask) { selectedTask.classList.remove('selected-task'); }

  event.target.classList.add('selected-task');
}

taskList.addEventListener('click', grayLineOnClick);

// Adding a line through the item on double click
function lineOnDblClick(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
taskList.addEventListener('dblclick', lineOnDblClick);

// Deleting all the list items
const deleteAllButton = document.getElementById('apaga-tudo');

deleteAllButton.addEventListener('click', () => {
  taskList.innerHTML = '';
});

// Deleting only finished (line through) list items
const deleteFinishedButton = document.getElementById('remover-finalizados');

deleteFinishedButton.addEventListener('click', () => {
  const listItemsArray = document.querySelectorAll('#lista-tarefas li');

  listItemsArray.forEach((item) => {
    if (item.classList.contains('completed')) {
      item.remove();
    }
  });
});

// Save tasks button
const saveTasksButton = document.getElementById('salvar-tarefas');

saveTasksButton.addEventListener('click', () => {
  localStorage.clear();

  const savedListItems = taskList.innerHTML;

  localStorage.setItem('saved', savedListItems);
});

// Move item list up
const moveUp = document.getElementById('mover-cima');

function moveItemUp() {
  const selectedTask = document.querySelector('.selected-task');

  if (!selectedTask) { return; }

  if (selectedTask.parentNode.firstChild.classList.contains('selected-task')) {
    return;
  }

  selectedTask.parentNode.insertBefore(selectedTask, selectedTask.previousElementSibling);
}

moveUp.addEventListener('click', moveItemUp);

// Move item list down
const moveDown = document.getElementById('mover-baixo');

function moveItemDown() {
  const selectedTask = document.querySelector('.selected-task');

  if (!selectedTask) { return; }

  if (selectedTask.parentNode.lastChild.classList.contains('selected-task')) {
    return;
  }

  selectedTask.parentNode.insertBefore(selectedTask.nextElementSibling, selectedTask);
}

moveDown.addEventListener('click', moveItemDown);

// Remove selected button
const removeSelectedButton = document.querySelector('#remover-selecionado');

function removeSelectedItem() {
  const selectedTask = document.querySelector('.selected-task');

  selectedTask.remove();
}

removeSelectedButton.addEventListener('click', removeSelectedItem);

// Loading the saved tasks input on window load.
function setTasks() {
  const taskListSavedItems = localStorage.getItem('saved');

  if (taskListSavedItems) {
    taskList.innerHTML = taskListSavedItems;
  }
}

window.addEventListener('load', setTasks);
