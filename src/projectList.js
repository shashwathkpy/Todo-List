let list = []

function ProjectList(projectList)
{
    if(projectList == "get")
    {
        return list;
    }
    else
    {
        list = projectList;
    }
}

export default ProjectList;