
const AboutItems = ({ aboutData }) => {
    return (
        <div className="aboutItems">
            <h3>{aboutData.title}</h3>
            <i class={aboutData.icon}></i> 
        </div>
    )
}

export default AboutItems
