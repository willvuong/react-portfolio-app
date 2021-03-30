import AboutItems from './AboutItems.js'
//import AboutData from '../data/AboutData.js'

const About = ({ aboutData }) => {
    return (
        <div className="About">
            <p>Hello, my name is William and I am a Computer Programming graduate from Seneca College.</p>
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
