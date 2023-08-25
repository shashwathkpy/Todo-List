function project(title)
{
    this.title = title;
}

function createProject(title)
{
    const p = document.createElement('div');
    p.textContent = title;
    return p;
}

export default createProject;