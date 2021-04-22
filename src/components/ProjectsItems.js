
const ProjectsItems = ({ projectsData }) => {
    return (
        <div className="ProjectsItems">
            <div className="projectImgContainer"> {/* specifically for dark background on hover */}
                <img src={projectsData.img} ></img>

                <div className="projectInfo">
                    <p>{projectsData.description}</p>
                    <button>
                        <a href={projectsData.demoLink} target="_blank">Demo</a>
                    </button>
                    <br />
                    <button>
                        <a href={projectsData.sourceCode} target="_blank">Source</a>
                    </button>
                </div>
            </div>

            <h3>{projectsData.name}</h3>

        </div>
    )
}

export default ProjectsItems
