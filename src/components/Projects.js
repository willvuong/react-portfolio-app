import ProjectsItems from './ProjectsItems.js'

const Projects = ({ projectsData }) => {
    return (
        <div className="Projects">
            {projectsData.length > 0 && projectsData.map((data) => (
                <ProjectsItems
                key={data.id}
                projectsData={data}
                />
            ))}
        </div>
    )
}

// {aboutData.length > 0 && aboutData.map((data) => (
//     //console.log(data.title);
//     <AboutItems 
//     key={data.id} 
//     aboutData={data}
//     />
// ))}

export default Projects
