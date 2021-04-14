import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const [activeTab, setActiveTab] = useState('')
    // const currentLocation = window.location.href;
    // useEffect(() => {
    //     if (currentLocation.endsWith('/about')) {
    //         setActiveTab('About')
    //     } else if (currentLocation.endsWith('/projects')) {
    //         setActiveTab('About')
    //     }
    // }, [activeTab])

    return (
        <nav className="Navigation">
            <ul id="navLinks"> {/* <ul id={activeTab ? 'navActive' : 'navLinks'}></ul> */}
                <li className={activeTab === 'About' ? "navActive" : ""}><Link to='/about' onClick={() => setActiveTab('About')}>About</Link></li>
                <li className={activeTab === 'Projects' ? "navActive" : ""}><Link to='/projects' onClick={() => setActiveTab('Projects')}>Projects</Link></li>
            </ul>
            {/* {activeTab} */}
        </nav>
    )
}

export default Navigation
