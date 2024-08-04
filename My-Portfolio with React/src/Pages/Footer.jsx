import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export const Footer = () => {
  return (
    <>
     <footer  style={{marginTop: '30px', textAlign: 'center', color: 'grey'}}>
    <span>Created By <a href="#" style={{color: 'white'}}> Najam Ul Hassan</a> | <FontAwesomeIcon icon={faCopyright}/>
      2024 All rights reserved.</span>
  </footer>
    </>
  )
}
