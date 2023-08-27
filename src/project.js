function Project(title, taskList)
{
    this.title = title;
    this.taskList = taskList
}

function createProject(title)
{
    const taskList = [];
    const project = new Project(title, taskList);
    return project;
}

export default createProject;