import React from 'react'

// React icon
import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { FaCode } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="footer">
            <div><MdEmail className="footerLogo" size={25} /> <a href="mailto:michael.baudoin.7@gmail.com">Me contacter</a></div>
            <div><FaGithub className="footerLogo" size={25} /> <a href="https://github.com/michaelbaud" target="_blank">Mon Github</a></div>
            <div><FaCode className="footerLogo" size={25} /> <a href="https://github.com/michaelbaud/covid19" target="_blank">Code source du site</a></div>
            <div>Made by Mikadev</div>
        </footer>
    )
}

export default Footer