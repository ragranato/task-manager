const createTaskHtml = (object) => {
    const html = `
            <div class="card-body pb-5">
                <div class="d-flex justify-content-end">
                  <button type="button" class="btn btn-primary mb-2">${object.status}</button>
                </div>                
                <h5 class="card-title">${object.task}</h5>
                <h6 class="card-subtitle mb-2 text-danger">${object.urgency}</h6>
                <h6 class="card-subtitle mb-2 text-danger">${object.due}</h6>
                <p class="card-text">${object.description}
                </p>
                <h6 class="card-subtitle mb-2">${object.assign}</h6>
            </div>
            `
}


class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(task, description, category, assign, urgency, due, status = 'TODO'){
        this.currentId++;
        const taskObj = {
            id: this.currentId,
            task,
            description,
            category,
            assign,
            urgency,
            due,
            status
        }
        this.tasks.push(taskObj);
    }
    render(){
        
    }
}