import { useState } from 'react'
import { Link } from 'react-router-dom'

import MenuButton from './MenuButton.js'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)
    //console.log({ showMenu })

    return (
        <nav className="Navigation">
            <ul id="navLinks">
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
            </ul>

            <MenuButton 
            icon={showMenu ? <i class="fas fa-times fa-2x"></i> : <i class="fas fa-bars fa-2x"></i>} //X menu of true, hamburger if false
            onClick={() => setShowMenu(!showMenu)} //toggle between true and false for onClick result
            />
            
        </nav>
        

    )
}

export default Navigation
