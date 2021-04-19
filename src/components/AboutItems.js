
const AboutItems = ({ aboutData }) => {
    return (
        <div className="AboutItems">
            <i className={aboutData.icon}></i> 
            <h3>{aboutData.title}</h3>
            <p>{aboutData.description}</p>
        </div>
    )
}

export default AboutItems
