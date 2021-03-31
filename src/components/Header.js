import Navigation from './Navigation.js'

const Header = () => {
    return (
        <header className='header'>
            <a href="/">
                <img src="mylogo.png" className="mylogo" alt="logo" width="130" height="130" />
            </a>
            <Navigation />
        </header>
    )
}

export default Header
