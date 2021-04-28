import React from 'react'

const Home = () => {
    return (
        <div className="Home">
            <title>William Vuong</title>
            
            <div className="description">
                <div className="bio">
                    <h2>HELLO, I'M WILLIAM.</h2>
                    <p>Web Programmer based in the Greater Toronto Area.</p>
                    {/* <i class="fas fa-arrow-circle-right fa-2x"></i> */}
                </div>
                <img id="portfolioImg" src="portfolioImg.jpg" alt="picOfMe" />
            </div>

            <div className="aboutMe">
                <p>
                    I am a Computer Programming graduate from Seneca College.
                    Throughout my program, I have demonstrated my ability to code in many
                    programming languages, such as: JavaScript, Java, C, and C++. I also
                    understand database technologies and have the ability to create simple
                    and complex SQL queries. And lastly, I understand the practices in order
                    to meaningfully gather business and system requirement needs.
                </p>

                <br />

                <p>
                    I especially have an interest in Front-End Web Development and enjoy
                    designing simple but yet meaningful websites. I have a good understand of 
                    the React framework and enjoy developing with its useful tools as it is easy 
                    and very organized.
                </p>

            </div>
        </div>
    )
}

export default Home
