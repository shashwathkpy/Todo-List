function task(title, description, dueDate, priority)
{
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

//task form

function createTask()
{
    const content = document.querySelector('#content');
    const taskForm = document.createElement('form');

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

    taskForm.appendChild(titleLabel);
    taskForm.appendChild(titleInput);
    taskForm.appendChild(descriptionLabel);
    taskForm.appendChild(descriptionInput);
    taskForm.appendChild(dueDateLabel);
    taskForm.appendChild(dueDateInput);
    taskForm.appendChild(priorityLabel);
    taskForm.appendChild(prioritySelect);

    content.appendChild(taskForm);

}

export default createTask;