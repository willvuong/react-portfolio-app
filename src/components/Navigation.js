import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/about'>About Me</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
