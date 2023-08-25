import createProject from "./project";
import createTask from "./task";

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
    project.classList.add('project');
    project.textContent = 'Chores';
    project.id = 'Chores';
    sidebar.appendChild(project);
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

    // taskBtn();

    
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
    project.classList.add('project');
    project.textContent = addProjectInput.value;
    project.id = addProjectInput.value;
    sidebar.appendChild(project);
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
        if(project.getAttribute('id') == clickedID)
        {
            clear(content);
            projectTitle.textContent = project.id;
            project.style.backgroundColor = selected;
            content.appendChild(projectTitle);
        }
    });
}

// Gives Projects an onclick function
function updateProjects()
{
    const projects = document.querySelectorAll('.project');
    Array.from(projects).forEach(project => {
        project.onclick = function() { projectDisplay(project.id) };
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
    taskBtn();
}

function taskBtn()
{
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.id = 'addTaskBtn';
    content.appendChild(addTaskBtn);

    addTaskBtn.addEventListener('click', function(e)
    {
        createTask();
        addTaskBtn.style.display = "none";
    })
}

export default createHomePage;