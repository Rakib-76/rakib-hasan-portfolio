import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const activeClass = 'px-3 py-2 underline font-semibold';
    const normalClass = 'px-3 py-2 rounded-md transition duration-300 hover:bg-[#422ad5] hover:text-white';
      const [isScrolled, setIsScrolled] = useState(false);
      
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <div className=" text-white fixed top-0 w-full z-50 shadow-sm">
            {/* Container */}
            <nav className={`max-w-7xl mx-auto px-4 flex justify-between items-center navbar ${isScrolled
          ? "bg-card/80 backdrop-blur-xl shadow-lg rounded-2xl mx-4"
          : "bg-transparent mx-10  "
          }`}>
                
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 w-52 p-2 shadow bg-black rounded-box">
                            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>Home</NavLink>
                            <NavLink to="/project" className={({ isActive }) => isActive ? activeClass : normalClass}>Projects</NavLink>
                            <NavLink to="/skill" className={({ isActive }) => isActive ? activeClass : normalClass}>Skill</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : normalClass}>About</NavLink>
                            <NavLink to="/education" className={({ isActive }) => isActive ? activeClass : normalClass}>Education</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass}>Contact</NavLink>
                        </ul>
                    </div>

                    {/* Brand */}
                    <NavLink to="/" className=" text-xl lg:text-2xl">
                        Rakib Hasan
                    </NavLink>
                </div>

                {/* Navbar Center (Desktop) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? activeClass : normalClass}>Home</NavLink>
                        <NavLink to="/project" className={({ isActive }) => isActive ? activeClass : normalClass}>Projects</NavLink>
                        <NavLink to="/skill" className={({ isActive }) => isActive ? activeClass : normalClass}>Skill</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : normalClass}>About</NavLink>
                        <NavLink to="/education" className={({ isActive }) => isActive ? activeClass : normalClass}>Education</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : normalClass}>Contact</NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
