import ProjectsItems from './ProjectsItems.js'

const Projects = ({ projectsData }) => {
    return (
        <div className="Projects">
            <title>William Vuong | Projects</title>
            
            {projectsData.length > 0 && projectsData.map((data) => (
                <ProjectsItems
                key={data.id}
                projectsData={data}
                />
            ))}
        </div>
    )
}

export default Projects
