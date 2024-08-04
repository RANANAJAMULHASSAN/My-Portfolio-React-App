import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  let [ActiveNav, setActiveNav] = useState(false)
  let handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <>
      <div className="svg" onClick={() => setActiveNav(!ActiveNav)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
          <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <nav>
        <ul className={`right ${ActiveNav ? 'showNav' : ""}`}>
          <FontAwesomeIcon className={`mobileCross`} onClick={() => setActiveNav(!ActiveNav)} icon={faClose} size='xl' />
          <li><Link to={`/`} smooth={true} duration={800} onClick={handleHomeClick}>Home</Link></li>
          <li><Link to={'Education'} smooth={true} duration={800}>Education</Link> </li>
          <li><Link to={'Skills'} smooth={true} duration={800}>Skills</Link></li>
          <li><Link to={'Project'} smooth={true} duration={800}>Project</Link></li>
          <li><Link to={'Contact'} smooth={true} duration={800}>Contact Us</Link></li>
        </ul>
      </nav>
    </>
  )
}



