
const ProjectsItems = ({ projectsData }) => {
    return (
        <div className="ProjectsItems">
            <div className="projectImgContainer"> {/* specifically for dark background on hover */}
                <img src={projectsData.img} ></img>
            </div>

            <h3>{projectsData.name}</h3>

            <div className="projectInfo">
                <p>{projectsData.description}</p>
                <a href={projectsData.demoLink} target="_blank">Demo</a>
                <br />
                <a href={projectsData.sourceCode} target="_blank">Source</a>
            </div>
        </div>
    )
}

export default ProjectsItems
