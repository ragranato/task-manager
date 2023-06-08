let task = document.getElementById("task");
let description = document.getElementById("description");
let category = document.getElementById("category");
let assign = document.getElementById("assign");
let urgent = document.getElementById("urgent");
let routine = document.getElementById("routine");
let due = document.getElementById("due");
const submit = document.getElementById("submit");
let urgency = urgent.checked ? urgent : routine;
let taskList = document.getElementById('task-list');


function handleSubmit(){
    event.preventDefault()
    taskmanager.addTask(task.value, description.value, category.value, assign.value, urgency.value, due.value)
    taskmanager.render()
    console.log(taskmanager.tasks)
}

const taskmanager = new TaskManager();

submit.addEventListener("click", handleSubmit);

function validateFormField() {}
