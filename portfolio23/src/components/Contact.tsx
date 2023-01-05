import { Fade } from '@mui/material'
import '../css/Contact.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Contact() {
    return (
        <Fade in={true}>
            <div className="contactMe">
                <div className="contactContent">
                    <h2>Find me on</h2>
                    <div id="socialLinks">
                        <a href="https://www.linkedin.com/in/leighton-albrecht/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                        <a href="https://github.com/lbalbrecht" target="_blank" rel="noreferrer"><BsGithub /></a>
                    </div>
                </div>
            </div>
        </Fade>
    )
}