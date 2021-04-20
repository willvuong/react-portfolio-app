
const ProjectsItems = ({ projectsData }) => {
    return (
        <div className="ProjectsItems">
            
            <img src={projectsData.img} ></img>
            <div className="projectInfo">
                <p>{projectsData.name}</p>
            </div>
        </div>
    )
}

export default ProjectsItems
