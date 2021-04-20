
const ProjectsItems = ({ projectsData }) => {
    return (
        <div className="ProjectsItems">
            <img src={projectsData.img} ></img>
            
            <div className="projectInfo">
                <h3>{projectsData.name}</h3>
                <p>{projectsData.description}</p>
                <a href={projectsData.demoLink}>Demo</a>
                <br/>
                <a href={projectsData.sourceCode}>Source</a>
            </div>
        </div>
    )
}

export default ProjectsItems
