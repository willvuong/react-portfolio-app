import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul id="navLinks">
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
