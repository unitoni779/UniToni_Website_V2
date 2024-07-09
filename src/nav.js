// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoLanguage, IoMenu, IoClose } from 'react-icons/io5';
// import logo from './Adsız tasarım.png';

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [language, setLanguage] = useState('en'); // Default language selection

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleLanguage = () => {
//     setLanguage(language === 'en' ? 'tr' : 'en');
//   };

//   return (
//     <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
//       <nav className="flex justify-between items-center w-[92%] mx-auto py-3">
//         <div className="flex items-center gap-6">
//           <img className="w-20 cursor-pointer mr-2 mt-2" src={logo} alt="Logo" style={{ width: "200px" }} />
//         </div>
//         <div
//           className={`nav-links md:flex md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full items-center px-5 transition-all duration-500 ease-in-out ${
//             menuOpen ? 'opacity-100 top-[60px] z-40' : 'opacity-0 top-[-100%] z-[-1]' 
//         }`  }
    
//         >
//           <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//             <li>
//               <a
//                 className="hover:text-gray-500 font-bold text-md font-sans text-[#112d42]"
//                 style={{ color: '#112d42' }}
//                 href="#"
//               >
//                 Products
//               </a>
//             </li>
//             <li>
//               <a
//                 className="hover:text-gray-500 font-bold text-md font-sans text-[#112d42]"
//                 style={{ color: '#112d42' }}
//                 href="#"
//               >
//                 Solution
//               </a>
//             </li>
//             <li>
//               <a
//                 className="hover:text-gray-500 font-bold text-md font-sans text-[#112d42]"
//                 style={{ color: '#112d42' }}
//                 href="#"
//               >
//                 Resource
//               </a>
//             </li>
//             <li>
//               <a
//                 className="hover:text-gray-500 font-bold text-md font-sans text-[#112d42]"
//                 style={{ color: '#112d42' }}
//                 href="#"
//               >
//                 Developers
//               </a>
//             </li>
//             <li>
//               <a
//                 className="hover:text-gray-500 font-bold text-md font-sans text-[#112d42]"
//                 style={{ color: '#112d42' }}
//                 href="/contact"
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//           <div className="flex flex-col md:flex-row md:items-center gap-6 mt-4 md:mt-0">
//             <button
//               onClick={toggleLanguage}
//               className="flex items-center px-2 py-1 text-xl font-semibold text-gray-600 hover:text-black focus:text-black focus:outline-none"
//             >
//               <IoLanguage className="text-2xl" />
//               <span className="ml-1 font-sans">{language.toUpperCase()}</span>
//             </button>
//             <Link
//               to="/demo"
//               className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white transition-all duration-200 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500 focus:bg-yellow-500 font-sans"
//               style={{ backgroundColor: "rgba(0, 135, 247, 0.6)" }}
//             >
//               BOOK DEMO
//             </Link>

//             <Link
//               to="/contact"
//               className="text-xl font-bold text-gray-600 hover:text-black transition-all duration-200 font-sans"
//               style={{ color: '#ff9a24' }}
//             >
//               LOGIN
//             </Link>
//           </div>
//         </div>
//         <div className="md:hidden flex items-center">
//           {menuOpen ? (
//             <IoClose onClick={toggleMenu} className="text-3xl cursor-pointer" />
//           ) : (
//             <IoMenu onClick={toggleMenu} className="text-3xl cursor-pointer" />
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default NavBar;
import logo from './Adsız tasarım.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center">
                    <img src={logo} className="h-6 mr- sm:h-9" alt="Landwind Logo" />
                </a>
                <div className="flex items-center lg:order-2">
                    <div className="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>
                    <button
                        onClick={toggleMobileMenu}
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isMobileMenuOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                        <svg className={`w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                    id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 text-white bg-yellow-500 rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white"
                                aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="#"
                                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-400 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                                   <Link
              to="/demo"
               className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white transition-all duration-200 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500 focus:bg-yellow-500 font-sans"
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
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
