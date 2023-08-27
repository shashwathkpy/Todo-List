import createProject from "./project";
import initiateTaskFields from "./task";
import ProjectList from "./projectList";

let projectList = []

function createHomePage()
{
    const sidebar = document.querySelector('#sidebar');
    const content = document.querySelector('#content');
    const addProjectInput = document.createElement('input');
    addProjectInput.type = 'text';
    addProjectInput.placeholder = 'Add Project';
    sidebar.appendChild(addProjectInput);

    // Default Project
    const project = createProject('Chores');
    projectList.push(project);
    ProjectList(projectList);
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.textContent = project.title;
    projectDiv.id = project.title;
    sidebar.appendChild(projectDiv);
    updateProjects();

    addProjectInput.addEventListener('keypress', function(e)
    {
        if(e.key == 'Enter')
        {
            e.preventDefault();
            if(projectCheck(addProjectInput))
            {
                projectAdd(addProjectInput);
                updateProjects();
                addProjectInput.value = '';
            }
            sidebar.removeChild(deleteProjectBtn);
            sidebar.appendChild(deleteProjectBtn);
        }
    })

    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.textContent = 'Delete';
    sidebar.appendChild(deleteProjectBtn);

    deleteProjectBtn.addEventListener('click', function(e)
    {
        deleteProject();
    })
}

// Checks if new project is not blank or a duplicate name
function projectCheck(addProjectInput)
{
    let check = true;
    const projects = document.querySelectorAll('.project');
    Array.from(projects).forEach(project => {
        if(addProjectInput.value == '')
        {
            check = false;
        }
        if(addProjectInput.value == project.textContent)
        {
            alert("A project with that name already exists!");
            check = false;
        }
    });
    return check;
}


// Creates and adds Project to Sidebar
function projectAdd(addProjectInput)
{
    const project = createProject(addProjectInput.value);
    projectList.push(project);
    ProjectList(projectList);
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.textContent = project.title;
    projectDiv.id = project.title;
    sidebar.appendChild(projectDiv);
}

// Displays Selected Project in Content
function projectDisplay(clickedID)
{
    const selected = 'green';
    const content = document.querySelector('#content');
    const projects = document.querySelectorAll('.project');
    const projectTitle = document.createElement('h1');

    projects.forEach(project => {
        project.style.backgroundColor = '';
        project.classList.remove('selected');
        if(project.getAttribute('id') == clickedID)
        {
            projectList = ProjectList("get");
            console.log(projectList);
            project.classList.add('selected');
            clear(content);
            taskBtn();
            projectTitle.textContent = project.id;
            project.style.backgroundColor = selected;
            content.appendChild(projectTitle);
            taskDisplay();
        }
    });
}

function taskDisplay()
{
    let tasks;
    const project = document.querySelector('.selected');
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
        taskDiv.textContent = tasks[i].title + " " + tasks[i].description + " " + tasks[i].dueDate + " " + tasks[i].priority;
        content.appendChild(taskDiv);
    }
    
}

// Gives Projects an onclick function
function updateProjects()
{
    const projects = document.querySelectorAll('.project');
    Array.from(projects).forEach(project => {
        project.onclick = function() {
             projectDisplay(project.id)
        };
    });
}

// Deletes Selected Project
function deleteProject()
{
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if(project.style.backgroundColor != '')
        {
            sidebar.removeChild(project);
            clear(content);
        }
    });
}

// Clears a div
function clear(content)
{
    while(content.lastElementChild)
    {
        content.removeChild(content.lastElementChild);
    }
}

function taskBtn()
{
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.id = 'addTaskBtn';
    content.appendChild(addTaskBtn);

    addTaskBtn.addEventListener('click', function(e)
    {
        initiateTaskFields(projectList);
        addTaskBtn.style.visibility = "hidden";
    })
}

export default createHomePage;