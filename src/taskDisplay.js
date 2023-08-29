import ProjectList from "./projectList";

function taskDisplay()
{
    let tasks;
    const project = document.querySelector('.selected');
    const projectList = ProjectList("get");
    for(let i = 0; i < projectList.length; i++)
    {
        if(projectList[i].title == project.id)
        {
            tasks = projectList[i].taskList;
        }
    }
    
    for(let i = 0; i < tasks.length; i++)
    {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskDiv');
        const taskTitle = document.createElement('div');
        taskTitle.textContent = tasks[i].title;
        taskDiv.id = taskTitle.textContent + Math.random().toString().substring(1);
        const taskDescription = document.createElement('div');
        taskDescription.textContent = tasks[i].description;
        const taskDueDate = document.createElement('div');
        taskDueDate.textContent = tasks[i].dueDate;
        const taskPriority = document.createElement('div');
        taskPriority.textContent = tasks[i].priority;
        switch (taskPriority.textContent)
        {
            case 'LOW':
                taskPriority.style.color = 'green';
                break;
            case 'MEDIUM':
                taskPriority.style.color = 'yellow';
                break;
            case 'HIGH':
                taskPriority.style.color = 'red';
                break;
        }
        const taskChecked = document.createElement('input');
        taskChecked.type = 'checkbox';

        const deleteTaskBtn = document.createElement('img');
        deleteTaskBtn.style.height = '40px';
        deleteTaskBtn.src = './images/trash.png';
        deleteTaskBtn.classList.add('deleteTaskBtn');

        const expandBtn = document.createElement('img');
        expandBtn.style.height = '60px';
        expandBtn.src = './images/down.png';
        expandBtn.classList.add('expandBtn');

        if(tasks[i].checked)
        {
            taskChecked.checked = true;
            taskDiv.style.textDecoration = 'line-through';
        }

        taskChecked.onchange = function() {
            tasks[i].checked = tasks[i].checked == true ? false : true;
            toggleTask(taskDiv.id, tasks[i].checked);
        };

        deleteTaskBtn.onclick = function() {
            deleteTask(taskDiv.id);    
        };

        expandBtn.onclick = function()
        {
            expandBtn.style.rotate = expandBtn.style.rotate == '90deg' ? '0deg' : '90deg';
            toggleExpand(taskDiv.id, taskDescription);
        }

        const taskDivTop = document.createElement('div');
        taskDivTop.classList.add('taskDivTop');
        taskDivTop.appendChild(taskChecked);
        taskDivTop.appendChild(taskTitle);
        taskDivTop.appendChild(taskDueDate);
        taskDivTop.appendChild(taskPriority);
        taskDivTop.appendChild(deleteTaskBtn);
        taskDivTop.appendChild(expandBtn);

        taskDiv.appendChild(taskDivTop);
        // taskDiv.style.height = '60px';
        content.appendChild(taskDiv);
    }
}

function toggleTask(toggledID, checked)
{
    console.log(toggledID);
    const taskDiv = document.getElementById(toggledID);
    if(checked)
    {
        taskDiv.style.textDecoration = 'line-through';
    }
    else
    {
        taskDiv.style.textDecoration = 'none';
    }
}

function deleteTask(clickedID)
{
    const taskDiv = document.getElementById(clickedID);
    const title = clickedID.split('.')[0];
    const projectList = ProjectList("get");
    for(let i = 0; i < projectList.length; i++)
    {
        for(let j = 0; j < projectList[i].taskList.length; j++)
        {
            if(projectList[i].taskList[j].title == title)
            {
                projectList[i].taskList.splice(j, 1);
            }
        }
    }
    ProjectList(projectList);
    content.removeChild(taskDiv);
}

function toggleExpand(toggledID, taskDescription)
{
    const taskDiv = document.getElementById(toggledID);
    const expandHeight = "100px";
    const normalHeight = "50px";
    taskDescription.classList.add('taskDescription');
    if(taskDescription.style.height != expandHeight)
    {
        taskDescription.style.height = expandHeight;
        taskDescription.style.overflow = 'overlay';
        taskDiv.appendChild(taskDescription);
    }
    else
    {
        taskDescription.style.height = normalHeight;
        taskDescription.style.overflow = 'hidden';
        taskDiv.removeChild(taskDescription);
    }     
}

export default taskDisplay;