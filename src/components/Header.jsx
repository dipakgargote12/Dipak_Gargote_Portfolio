import React, { useState } from 'react'
import './Header.css'
import { Link } from "react-scroll";
const Header = () => {
    const [isActive, SetisActive] = useState(false);
  return (
    <header id="header" className='sticky-top'>
        <div className='header_wrapper background'>
            <div className='header_top'>
                <div className='logo-image'>
                    <img 
                        src="/media/Logo_image.png" 
                        alt='logo_image' 
                        className='header_user_logo'
                    />
                </div>
                <div>
                    <h1 className='logo_title'>Dipak Gargote</h1>
                </div>
            </div>
            {/* header Menu items */}
            <div className={`header_nav ${isActive? 'active':''}`}>
                <nav className='header-nav-wrapper'>
                    <ul className='nav_item_wrapper'>
                        <li className='nav_item'>
                             <Link onClick={()=>{ SetisActive(false)}} to="Hero" smooth={true} duration={500} className='nav_item_data
                             ' > Home</Link>
                        </li>
                        <li className='nav_item'>
                             <Link onClick={()=>{ SetisActive(false)}} to="About" smooth={true} duration={500}className='nav_item_data
                             '>About me</Link>
                        </li>
                        <li className='nav_item'>
                             <Link onClick={()=>{ SetisActive(false)}} to="Resume" smooth={true} duration={500}className='nav_item_data
                             '>Resume</Link>
                        </li>
                        <li className='nav_item'>
                             <Link onClick={()=>{ SetisActive(false)}} to="Projects" smooth={true} duration={500}className='nav_item_data
                             '>Projects</Link>
                        </li>
                        <li className='nav_item'>
                             <Link onClick={()=>{ SetisActive(false)}} to="Contact" smooth={true} duration={500}className='nav_item_data
                             '>Contact</Link>
                        </li>

                    </ul>
                </nav>
            </div>

            {/* Header bottom */}
            <div className='header_bottom'>
                <ul className='header_social_icons'>
                    <li className='social_icon facebook'>
                        <a href='https://www.facebook.com/share/188L3NPRJc/'><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li className='social_icon instagram'>
                        <a href='https://www.instagram.com/gargotedipak2001/'><i className="fa-brands fa-instagram"></i></a>
                    </li>
                    <li className='social_icon linkedin'>
                        <a href='www.linkedin.com/in/dipak-gargote'><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                </ul>
            </div>
            <div onClick={()=>{ SetisActive(!isActive)}} className={`Hambuger_icon ${isActive? 'active':''}`}>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
  )
}

export default Header
