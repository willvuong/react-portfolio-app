import React from 'react'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="contact">
                <ul>
                    <li>
                        <a href="mailto:willvuong@hotmail.com">
                            <i class="fas fa-envelope-open-text fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/willlvuong" target="_blank"> {/* target="_blank" sends to new tab instead of hard link */}
                            <i class="fab fa-linkedin fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/willvuong" target="_blank">
                            <i class="fab fa-github fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="tel:6477085527">
                            <i class="fas fa-phone-square-alt fa-3x"></i>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Footer
