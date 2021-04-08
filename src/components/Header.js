import Navigation from './Navigation.js'

const Header = () => {
    
    return (
        <header className='Header'>
            <div className="navbar">
                <a href="/">
                    <img src="mylogo.png" className="myLogo" alt="logo"/>
                </a>
                <Navigation />
            </div>
        </header>
    )
}

export default Header
