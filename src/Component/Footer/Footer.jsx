import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    const activeClass =
        'px-3 py-2 rounded-md bg-[#422ad5] text-white font-semibold';
    const normalClass =
        'px-3 py-2 rounded-md transition duration-300 hover:bg-[#422ad5] hover:text-white text-white';

    return (
        <footer className="bg-black text-white p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
                {/* Logo + Intro */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="font-bold text-2xl">Rakib Hasan</h1>
                    <p className="text-gray-300">
                        Hi, thanks for visiting my portfolio.
                    </p>
                </div>

                {/* Nav Links */}
                <nav className="flex gap-4">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? activeClass : normalClass
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? activeClass : normalClass
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/project"
                        className={({ isActive }) =>
                            isActive ? activeClass : normalClass
                        }
                    >
                        Projects
                    </NavLink>
                </nav>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <a
                        href="https://github.com/Rakib-76"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rakib76"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300"
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href="https://www.facebook.com/rakib.hasan.190064"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300"
                    >
                        <FaFacebook size={28} />
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300"
                    >
                        <FaTwitter size={28} />
                    </a>
                </div>
            </div>
            <p className='text-center mt-10 ml-6'>Copyright © {new Date().getFullYear()} - All right reserved by Md Rakib Hasan</p>
        </footer>
    );
};

export default Footer;
