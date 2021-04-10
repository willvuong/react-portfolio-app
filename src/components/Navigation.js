import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


import MenuButton from './MenuButton.js'
import NavigationResponsive from './NavigationResponsive.js'

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false) //for hamburger menu (click hambuger to open, X to close)
    //console.log({ showMenu })

    const [activeTab, setActiveTab] = useState('')
    const currentLocation = window.location.href;
    useEffect(() => {
        if (currentLocation.endsWith('/about')) {
            setActiveTab('About')
        } else if (currentLocation.endsWith('/projects')) {
            setActiveTab('About')
        }
    }, [activeTab])

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
            
            {showMenu && <NavigationResponsive />}
        </nav>
        

    )
}

export default Navigation
