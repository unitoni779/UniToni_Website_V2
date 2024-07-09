import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Adsız tasarım.png';
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
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="flex items-center gap-6">
          <img className="w-20 cursor-pointer mr-2 mt-2" src={logo} alt="Logo" style={{width:"200px"}} />
        </div>
        <div
          className={`nav-links duration-500 ${
            menuOpen ? 'top-[9%]' : 'top-[-100%]'
          } md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a
                className="hover:text-gray-500 font-bold text-lg font-sans text-[#112d42]" 
                style={{ color: '#112d42' }}
                href="#"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 font-bold text-lg font-sans text-[#112d42]"
                style={{ color: '#112d42' }}
                href="#"
              >
                Solution
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 font-bold text-lg font-sans text-[#112d42]"
                style={{ color: '#112d42' }}
                href="#"
              >
                Resource
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 font-bold text-lg font-sans text-[#112d42]"
                style={{ color: '#112d42' }}
                href="#"
              >
                Developers
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500 font-bold text-lg font-san text-[#112d42]s"
                style={{ color: '#112d42' }}
                href="/contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center px-2 py-1 text-xl font-semibold text-gray-600 hover:text-black focus:text-black focus:outline-none"
            style={{ marginRight: '30px' }}
          >
            <IoLanguage className="text-2xl" />
            <span className="ml-1 font-sans">{language.toUpperCase()}</span>
          </button>
        <Link
  to="/demo"
  className="inline-flex items-center px-3 py-1.5 text-sm font-semibold text-white transition-all duration-200 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500 focus:bg-yellow-500 font-sans"
  style={{ backgroundColor: "rgba(0, 135, 247, 0.6)" }}
>
  BOOK DEMO
</Link>

          <Link
            to="/contact"
            className="text-xl font-bold text-gray-600 hover:text-black transition-all duration-200 font-sans"
            style={{ color: '#ff9a24' }}
          >
            LOGIN
          </Link>
          <ion-icon
            onClick={toggleMenu}
            name={menuOpen ? 'close' : 'menu'}
            className="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
