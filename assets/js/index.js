let task = document.getElementById("task");
let description = document.getElementById("description");
let category = document.getElementById("category");
let assign = document.getElementById("assign");
let urgent = document.getElementById("urgent");
let routine = document.getElementById("routine");
let due = document.getElementById("due");
const submit = document.getElementById("submit");


function handleSubmit(event) {
    event.preventDefault()
    let urgency;
    if (urgent.checked){
        urgency = urgent;
    } else if (routine.checked){
        urgency = routine
    } else {
        urgency = ''
    };
    let today = new Date().toISOString().split('T')[0]
       
    if (task.value === '') {
        alert('Please enter a task')
    } else if (description.value === '') {
        alert('Please describe the task')
    } else if (category.value === 'choose') {
        alert('Please select a category')
    } else if (assign.value === '') {
        alert('Please assign the task')
    } else if (description.value === '') {
        alert('Please describe the task')
    } else if (urgency === '') {
        alert('Please select the urgency')
    } else if (due.value === '' || due.value < today) {
        alert('Please enter a valid due date')
    } else {
        taskManager.addTask(task.value, description.value, category.value, assign.value, urgency.value, due.value)
        
        taskManager.render()
    }


}

const taskManager = new TaskManager();

submit.addEventListener("click", handleSubmit);

taskList.addEventListener("click", (event) => {
    event.preventDefault()
    let done = event.target 

    let parent = done.parentElement.parentElement;
    
    let taskId = Number(parent.id)
    
    let task = taskManager.getTaskById(taskId)
    
    task.status = 'DONE'    
    taskManager.tasks[taskId - 1] = task;     
    
    taskManager.render()
    
});
