let taskList = document.getElementById("task-list");

const createTaskHtml = (object) => {
  const html = `                 
            <div class="card-body pb-5" id=${object.id}>
                <div class="d-flex  card-btns">
                  <button type="button" class="btn btn-primary mb-2 done-button">${object.status}</button>   
                  <button type="button" class="btn btn-primary mb-2 delete-button">Delete</button>               
                </div>                
                <h5 class="card-title">${object.task}</h5>
                <h6 class="card-subtitle mb-2 text-danger">${object.urgency}</h6>
                <h6 class="card-subtitle mb-2 text-danger">${object.due}</h6>
                <p class="card-text">${object.description}
                </p>
                <h6 class="card-subtitle mb-2">${object.assign}</h6>
                <h6 class="card-subtitle mb-2">${object.category}</h6>
            </div>                    
            `;
  return html
};



class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentId = 0;
  }

  addTask(task, description, category, assign, urgency, due, status = "Pending") {
    this.currentId++;
    const taskObj = {
      id: this.currentId,
      task,
      description,
      category,
      assign,
      urgency,
      due,
      status,
    };
    this.tasks.push(taskObj);   
  }

  save() {
    const taskJSON = JSON.stringify(this.tasks)
    const currentIdString = String(this.currentId)
    localStorage.setItem("tasks", taskJSON)
    localStorage.setItem("currentId", currentIdString)
  }

  load() {
    if (localStorage.getItem('tasks') !== null) {
      const tasksJSON = localStorage.getItem('tasks')
      this.tasks = JSON.parse(tasksJSON)
    }
    if (localStorage.getItem('currentId') !== null) {
      const currentId = Number(localStorage.getItem('currentId'))
      this.currentId = currentId
    }
  }

  deleteTask(taskId) {
    const newTasks = []
    for (let i = 0; i < this.tasks.length; i++) {
      if (taskId !== this.tasks[i]['id']) {
        newTasks.push(this.tasks[i])
      }
    }
    this.tasks = newTasks
  }

  render() {
    console.log(this.tasks);
    let taskHtmlList = []; 
    for (let i = 0; i < this.tasks.length; i++) {      
      let taskHtml = createTaskHtml(this.tasks[i]);     
      taskHtmlList.push(taskHtml);
    }    
    const tasksHtml = taskHtmlList.join('\n')
    taskList.innerHTML = tasksHtml    
    document.getElementById('task-form').reset();
  }

  getTaskById(taskId) {
    let foundTask;
    this.tasks.forEach((task) => {
      if (task.id === taskId) {
        foundTask = task;
      }
    })
    return foundTask;
  }
}
