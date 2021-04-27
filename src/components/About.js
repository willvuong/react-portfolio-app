import AboutItems from './AboutItems.js'

const About = ({ aboutData }) => {
    return (
        <div className="About">
            <title>William Vuong | About</title>
            
            <h2>What I Offer</h2>
            {aboutData.length > 0 && aboutData.map((data) => (
                //console.log(data.title);
                <AboutItems
                    key={data.id}
                    aboutData={data}
                />
            ))}
            <div className="resume">
                <a href="resumeSAMPLE.pdf" download><i className="far fa-file"></i> Resume</a>
            </div>
        </div>
    )
}

export default About
