const selected = 'green';

function projectDisplay(clickedID)
{
    console.log('project display');
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

function clear(content)
{
    while(content.lastElementChild)
    {
        content.removeChild(content.lastElementChild);
    }
}

export default projectDisplay;