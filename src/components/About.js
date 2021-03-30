import AboutItems from './AboutItems.js'
//import AboutData from '../data/AboutData.js'

const About = ({ aboutData }) => {
    return (
        <div className="about">
            <p>Hello, my name is William and I am a Computer Programming graduate from Seneca College.</p>
            <h3>What I Offer</h3>
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
