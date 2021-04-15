import AboutItems from './AboutItems.js'

const About = ({ aboutData }) => {
    return (
        <div className="About">
            <h2>What I Offer</h2>
            {aboutData.length > 0 && aboutData.map((data) => (
                //console.log(data.title);
                <AboutItems 
                key={data.id} 
                aboutData={data}
                />
            ))}
        </div>
    )
}

export default About
