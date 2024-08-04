import React from 'react'
import './Social.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
export const Social = () => {
    let goToLink = () => {
        window.open("https://github.com/RANANAJAMULHASSAN?tab=repositories", "_blank")

    }
    let goToLink1 = () => {
        window.open("https://linkedin.com/in/najamul-hassan", "_blank")

    }
    let goToLink2 = () => {
        window.open("mailto:najamulhassan.info@gmail.com", "_blank")

    }
    return (
        <>
            <div className="socialConteiner">

                <div className="line"></div>
                <div className="socialIcon">
                    <FontAwesomeIcon icon={faGithub} size='2xl' onClick={goToLink} className='icon' />
                    <FontAwesomeIcon icon={faLinkedin} size='2xl' onClick={goToLink1} className='icon' />
                    <FontAwesomeIcon icon={faEnvelope} size='2xl' onClick={goToLink2} className='icon' />
                </div>
                <div className="line"></div>
            </div>
        </>
    )
}
