import React, { useState } from 'react';
import logo from './unitonilogo.jpg'; // Make sure to import your logo correctly
import { IoLanguage } from 'react-icons/io5';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage] = useState('en'); // Default language selection

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'tr' : 'en');
    };

    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
            <nav className="flex justify-between items-center w-[92%] mx-auto font-sans">
                <div className="flex items-center gap-6">
                    <img className="w-20 cursor-pointer" src={logo} alt="Logo" />
                   
                </div>
                <div
                    className={`nav-links duration-500 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'} md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5`}
                >
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a className="hover:text-gray-500" href="#">Products</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Solution</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Resource</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Developers</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                <button
                        onClick={toggleLanguage}
                        className="flex items-center px-2 py-1 text-xl font-semibold text-gray-600 hover:text-black focus:text-black focus:outline-none"
                   style={{marginRight:"30px"}} >
                        <IoLanguage className="text-2xl" />
                        <span className="ml-1">{language.toUpperCase()}</span>
                    </button>
                    
                    <a href="#" className="inline-flex items-center px-5 py-2 text-xl font-semibold text-white transition-all duration-200 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500 focus:bg-yellow-500"  style={{ backgroundColor: "#0087f7" }}>BOOK DEMO</a>
                    <a href="#" className="inline-flex items-center px-5 py-2 text-xl font-semibold text-white transition-all duration-200 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500 focus:bg-yellow-500"  style={{ backgroundColor: "#ff9a24" }}>LOGIN</a>

                    <ion-icon onClick={toggleMenu} name={menuOpen ? 'close' : 'menu'} className="text-3xl cursor-pointer md:hidden"></ion-icon>
                   
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
