import ProjectList from "./projectList";
import taskDisplay from "./taskDisplay";


function Task(title, description, dueDate, priority, checked)
{
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
}

//task form
function initiateTaskFields(projectList)
{
    toggleDim();

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
    low.textContent = 'LOW';
    low.value = 'LOW';

    const medium = document.createElement('option');
    medium.textContent = 'MEDIUM';
    medium.value = 'MEDIUM';

    const high = document.createElement('option');
    high.textContent = 'HIGH';
    high.value = 'HIGH';

    prioritySelect.appendChild(low);
    prioritySelect.appendChild(medium);
    prioritySelect.appendChild(high);

    const taskFieldsButtonsDiv = document.createElement('div');
    taskFieldsButtonsDiv.id = 'taskFieldsButtonsDiv';
    const createBtn = document.createElement('img');
    createBtn.src = './images/check.svg';
    createBtn.textContent = 'Create';
    createBtn.id = 'createTaskBtn';

    const cancelBtn = document.createElement('img');
    cancelBtn.src = './images/close.svg';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.id = 'cancelTaskBtn';

    taskFieldsButtonsDiv.appendChild(createBtn);
    taskFieldsButtonsDiv.appendChild(cancelBtn);

    taskFields.appendChild(titleLabel);
    taskFields.appendChild(titleInput);
    taskFields.appendChild(descriptionLabel);
    taskFields.appendChild(descriptionInput);
    taskFields.appendChild(dueDateLabel);
    taskFields.appendChild(dueDateInput);
    taskFields.appendChild(priorityLabel);
    taskFields.appendChild(prioritySelect);
    taskFields.appendChild(taskFieldsButtonsDiv);

    content.appendChild(taskFields);

    createBtn.addEventListener('click', function(e)
    {
        if(titleInput.value.length < 1 || titleInput.value.includes('.'))
        {
            titleInput.value = '';
            titleInput.placeholder = 'Task Title Error!';
            descriptionInput.placeholder = 'Task Title Error!';
        }
        else
        {
            const task = new Task(titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value, false);
            content.removeChild(taskFields);
    
            const project = document.querySelector('.selected');
            projectList.forEach(p => {
                if(p.title == project.id)
                {
                    p.taskList.push(task);
                }
            });
    
            ProjectList(projectList);
            localStorage.setItem("projectList", JSON.stringify(projectList));
            const taskDivs = document.querySelectorAll('.taskDiv');
            taskDivs.forEach(td => {
                content.removeChild(td);
            });
            taskDisplay();
            const addTaskBtn = document.querySelector('#addTaskBtn');
            addTaskBtn.style.visibility = "visible";
            toggleDim();
        }
    })

    cancelBtn.addEventListener('click', function(e)
    {
        content.removeChild(taskFields);
        const addTaskBtn = document.querySelector('#addTaskBtn');
        addTaskBtn.style.visibility = "visible";
        toggleDim();
    })

}

function toggleDim()
{
    const content = document.querySelector('#content');
    const header = document.querySelector('#header');
    const sidebar = document.querySelector('#sidebar');
    const footer = document.querySelector('#footer');
    
    if(content.style.backgroundColor == 'rgba(0, 0, 0, 0.5)')
    {
        content.style.backgroundColor = 'rgb(58, 58, 58)';
        header.style.backgroundColor = 'rgb(55, 79, 158)';
        sidebar.style.backgroundColor = 'rgb(100, 100, 100)';
        footer.style.backgroundColor = 'rgb(55, 79, 158)';
    }
    else
    {
        content.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        header.style.backgroundColor = 'rgba(0, 0, 100, 0.5)';
        sidebar.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        footer.style.backgroundColor = 'rgba(0, 0, 100, 0.5)';
    }
}

export default initiateTaskFields;