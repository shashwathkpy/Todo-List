import createProject from "./project";
import initiateTaskFields from "./task";
import ProjectList from "./projectList";
import taskDisplay from "./taskDisplay";

let projectList = [];
let isSelected = false;

function createHomePage()
{
    const sidebar = document.querySelector('#sidebar');
    const content = document.querySelector('#content');

    const projectHeader = document.createElement('div');
    projectHeader.id = 'projectHeader';
    const projectText = document.createElement('h2');
    projectText.textContent = "Projects";
    const addProjectBtn = document.createElement('img');
    addProjectBtn.src = './images/add.png';
    addProjectBtn.id = 'addProjectBtn';
    projectHeader.appendChild(projectText);
    projectHeader.appendChild(addProjectBtn);
    sidebar.appendChild(projectHeader);

    const projectSubHeader = document.createElement('div');
    projectSubHeader.id = 'projectSubHeader';
    const addProjectInput = document.createElement('input');
    addProjectInput.id = 'addProjectInput';
    addProjectInput.type = 'text';
    addProjectInput.placeholder = 'Add Project';
    projectSubHeader.appendChild(addProjectInput);

    const deleteProjectBtn = document.createElement('img');
    deleteProjectBtn.src = './images/trash.png';
    deleteProjectBtn.style.width = '50px';
    deleteProjectBtn.id = 'deleteProjectBtn';
    deleteProjectBtn.textContent = 'Delete';
    projectSubHeader.appendChild(deleteProjectBtn);

    deleteProjectBtn.addEventListener('click', function(e)
    {
        deleteProject();
    })

    deleteProjectBtn.onmouseenter = function()
    {
        if(isSelected)
        {
            const selected = document.querySelector('.selected');
            selected.style.backgroundColor = 'darkred';
        }
    };

    deleteProjectBtn.onmouseleave = function()
    {
        if(isSelected)
        {
            const selected = document.querySelector('.selected');
            selected.style.backgroundColor = 'green';
        }
    };

    sidebar.appendChild(projectSubHeader);

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

    addProjectBtn.addEventListener('click', function(e)
    {
        if(projectCheck(addProjectInput))
        {
            projectAdd(addProjectInput);
            updateProjects();
            addProjectInput.value = '';
        }
        sidebar.removeChild(deleteProjectBtn);
        sidebar.appendChild(deleteProjectBtn);
    })

    addProjectInput.addEventListener('keypress', function(e)
    {
        addProjectInput.placeholder = 'Add Project';
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
            addProjectInput.value = '';
            addProjectInput.placeholder = 'A project with that name already exists!';
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
    const contentHeader = document.createElement('div');
    contentHeader.id = 'contentHeader';
    const projectTitle = document.createElement('h1');

    clear(content);
    clear(contentHeader);
    isSelected = false;

    projects.forEach(project => {
        project.style.backgroundColor = '';
        project.classList.remove('selected');
        
        if(project.getAttribute('id') == clickedID)
        {
            projectList = ProjectList("get");
            project.classList.add('selected');
            isSelected = true;

            projectTitle.textContent = project.id;
            project.style.backgroundColor = selected;
            contentHeader.appendChild(projectTitle);
            content.appendChild(contentHeader);
            taskBtn();
            taskDisplay();
        }
    });
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
    for(let i = 0; i < projects.length; i++)
    {
        if(projects[i].style.backgroundColor != '')
        {
            sidebar.removeChild(projects[i]);
            projectList.splice(i, 1);
            clear(content);
        }
    }
    ProjectList(projectList);
}

// Clears a div
function clear(section)
{
    section.innerHTML = "";
    // while(section.lastElementChild)
    // {
    //     section.removeChild(section.lastElementChild);
        // console.log(section.lastElementChild);
    // }

    // const parent = document.getElementById(parentID);
    // const nodes = parent.childNodes;
    // nodes.forEach(n => {
    //     parent.removeChild(n);
    // });
}

function taskBtn()
{
    const addTaskBtn = document.createElement('img');
    addTaskBtn.src = './images/add.png';
    // addTaskBtn.textContent = 'Add Task';
    addTaskBtn.id = 'addTaskBtn';
    addTaskBtn.title = 'Add Task';
    const contentHeader = document.querySelector('#contentHeader');
    contentHeader.appendChild(addTaskBtn);

    addTaskBtn.addEventListener('click', function(e)
    {
        initiateTaskFields(projectList);
        addTaskBtn.style.visibility = "hidden";
    })
}

export default createHomePage;