import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul>
                <li><Link to='/about'>About Me</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
