import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="mt-[5rem] p-4 bg-gray-1000 text-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/adistrim" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" aria-label="GitHub"><FaGithub size={20} /></a>
                    <a href="https://linkedin.com/in/adistrim" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
                    <a href="https://twitter.com/_adistrim_" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" aria-label="Twitter"><FaTwitter size={20} /></a>
                    <a href="https://instagram.com/adistrim" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300" aria-label="Instagram"><FaInstagram size={20} /></a>
                </div>
                <div className="flex">
                    <a href="https://github.com/adistrim/adistrim.me" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">View Source Code</a>
                    <span className="mx-2 text-gray-300">|</span>
                    <a href="mailto:adistrim.dev@gmail.com" className="hover:text-gray-300" aria-label="Email"><FaEnvelope size={20} /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;