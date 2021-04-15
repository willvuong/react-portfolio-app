
const ProjectsItems = ({ projectsData }) => {
    return (
        <div className="ProjectItems">
            
            <p>{projectsData.name}</p>
            <img src={projectsData.img} height="200px" width="400px"></img>
        </div>
    )
}

export default ProjectsItems
