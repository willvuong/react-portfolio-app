import React from 'react'

const Contact = ({ contactData }) => {
    return (
        <>
            <li>
                <a href={contactData.link} target="_blank">
                    <i className={contactData.icon}></i>
                </a>
            </li>
        </>
    )
}

export default Contact


// {/* <ul id="contactLinks">
//                     <li>
//                         <a href="mailto:willvuong@hotmail.com">
//                             <i className="fas fa-envelope-open-text fa-3x"></i>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://www.linkedin.com/in/willlvuong" target="_blank"> {/* target="_blank" sends to new tab instead of hard link */}
//                             <i className="fab fa-linkedin fa-3x"></i>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="https://github.com/willvuong" target="_blank">
//                             <i className="fab fa-github fa-3x"></i>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="tel:6477085527">
//                             <i className="fas fa-phone-square-alt fa-3x"></i>
//                         </a>
//                     </li>
//                 </ul> */}