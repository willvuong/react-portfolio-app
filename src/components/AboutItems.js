
const AboutItems = ({ aboutData }) => {
    return (
        <div className="AboutItems">
            <h3>{aboutData.title}</h3>
            <i class={aboutData.icon}></i> 
        </div>
    )
}

export default AboutItems
