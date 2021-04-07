import Navigation from './Navigation.js'

const Header = () => {
    
    return (
        <header className='Header'>
            <div className="navbar">
                <a href="/">
                    <img src="mylogo.png" className="myLogo" alt="logo"/>
                </a>
                <Navigation />
                <i class="fas fa-bars fa-2x" onClick="toggleMenu()"></i>
            </div>
        </header>
    )
}

export default Header
