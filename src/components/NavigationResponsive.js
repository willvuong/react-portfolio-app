import { Link } from 'react-router-dom'

const NavigationResponsive = () => {
    return (
        <nav className="NavigationResponsive">
            <ul id="navLinksResponsive">
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationResponsive
