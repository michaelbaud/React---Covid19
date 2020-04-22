import React from 'react'

// React icon
import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"
import { FaCode } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="footer">
            <div><FaCode className="footerLogo" size={25} /> <a href="https://github.com/michaelbaud/covid19" target="_blank" rel="noopener noreferrer">Code source du site</a></div>
            <div>Made by Michael Baudoin</div>
        </footer>
    )
}

export default Footer