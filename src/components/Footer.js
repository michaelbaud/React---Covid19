import React from 'react'

// React icon
import { MdEmail } from "react-icons/md"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="footer">
            <div><MdEmail className="footerLogo" size={25} /> <a href="mailto:michael.baudoin.7@gmail.com">Me contacter</a></div>
            <div><FaGithub className="footerLogo" size={25} /> <a href="https://github.com/michaelbaud" target="_blank">Mon github</a></div>
            <div>Copyright &copy; 2020 Mikadev / Tous droits réservés</div>
        </footer>
    )
}

export default Footer