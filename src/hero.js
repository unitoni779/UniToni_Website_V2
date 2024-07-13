import React from 'react';
import tasarim from './freepik-new-project-20240710002811vXlb.png';
import app from './app2.png';
import google from './google.png';
import { Link } from 'react-router-dom';

const ShuffleHero = () => {
    return (
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 font-figtree">
            <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-bold text-gray-800 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">The Future of Education is </span>
                        <span className="block text-indigo-600 xl:inline" style={{ color: "#ff9a24" }}>Here</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        UniToni is easy modern, saves time and combines 3 systems into one platform.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md">
                            <Link to="/demo">
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                                    style={{ backgroundColor: "#0087f7", opacity: "0.9" }}
                                >
                                    Book Demo
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center sm:justify-start gap-3">
                        <a href="https://apps.apple.com/tr/app/unitoni/id1603632698" target="_blank" rel="noopener noreferrer">
                            <img className="h-16 w-auto sm:h-24 sm:w-auto lg:h-32 lg:w-auto object-cover" src={app} alt="App Button" style={{ width: "200px" }} />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.UniToni.unis&hl=en" target="_blank" rel="noopener noreferrer">
                            <img className="h-16 w-auto sm:h-24 sm:w-auto lg:h-32 lg:w-auto object-cover" src={google} alt="Google Button" style={{ width: "200px" }} />
                        </a>
                    </div>
                </div>
                <div className="lg:inset-y-0 lg:right-0 lg:w-2/3 my-4">
                    <img className="h-94 sm:h-80 md:h-96 lg:h-160 w-full object-cover lg:w-auto lg:w-116 mr-4" src={tasarim} alt="Hero Image" />
                </div>
            </div>
        </section>
    );
}

export default ShuffleHero;
