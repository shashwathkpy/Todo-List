import ProjectList from "./projectList";

function Task(title, description, dueDate, priority)
{
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

//task form
function initiateTaskFields(projectList)
{
    const content = document.querySelector('#content');
    const taskFields = document.createElement('fieldset');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Task Name:';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('textarea');

    descriptionInput.rows = '4';

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    const prioritySelect = document.createElement('select');
    const low = document.createElement('option');
    low.textContent = 'Low';
    low.value = 'Low';

    const medium = document.createElement('option');
    medium.textContent = 'Medium';
    medium.value = 'Medium';

    const high = document.createElement('option');
    high.textContent = 'High';
    high.value = 'High';

    prioritySelect.appendChild(low);
    prioritySelect.appendChild(medium);
    prioritySelect.appendChild(high);


    const createBtn = document.createElement('button');
    createBtn.textContent = 'Create';

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';

    taskFields.appendChild(titleLabel);
    taskFields.appendChild(titleInput);
    taskFields.appendChild(descriptionLabel);
    taskFields.appendChild(descriptionInput);
    taskFields.appendChild(dueDateLabel);
    taskFields.appendChild(dueDateInput);
    taskFields.appendChild(priorityLabel);
    taskFields.appendChild(prioritySelect);
    taskFields.appendChild(createBtn);
    taskFields.appendChild(cancelBtn);

    content.appendChild(taskFields);

    createBtn.addEventListener('click', function(e)
    {
        const task = new Task(titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value);
        createTaskDiv(task);
        content.removeChild(taskFields);

        const project = document.querySelector('.selected');
        projectList.forEach(p => {
            if(p.title == project.id)
            {
                p.taskList.push(task);
            }
        });

        ProjectList(projectList);

        const addTaskBtn = document.querySelector('#addTaskBtn');
        addTaskBtn.style.visibility = "visible";
    })

    cancelBtn.addEventListener('click', function(e)
    {
        content.removeChild(taskFields);
        const addTaskBtn = document.querySelector('#addTaskBtn');
        addTaskBtn.style.visibility = "visible";
    })

    function createTaskDiv(task)
    {
        const taskDiv = document.createElement('div');
        taskDiv.textContent = task.title + " " + task.description + " " + task.dueDate + " " + task.priority;
        content.appendChild(taskDiv);
    }
}


export default initiateTaskFields;