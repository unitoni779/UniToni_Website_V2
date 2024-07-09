import React from 'react';
import tasarim from './heroo.png';
import app from './app2.png';
import google from './google.png';

const ShuffleHero = () => {
    return (
        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 font-figtree">
            <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">The Future of Education is </span>
                        <span className="block text-indigo-600 xl:inline" style={{ color: "#ff9a24" }}>Here</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        UniToni is easy modern, saves time and combines 3 systems into one platform.
                    </p>

                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md">
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                                style={{ backgroundColor: "#0087f7" }}
                            >
                                Get started
                            </a>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-center sm:justify-start gap-3">
                        <img className="h-16 w-auto sm:h-24 sm:w-auto lg:h-32 lg:w-auto object-cover" src={app} alt="App Button"style={{width:"200px"}} />
                        <img className="h-16 w-auto sm:h-24 sm:w-auto lg:h-32 lg:w-auto object-cover" src={google} alt="Google Button" style={{width:"200px"}}/>
                    </div>
                </div>

                <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={tasarim} alt="Hero Image" />
                </div>
            </div>
        </section>
    );
}

export default ShuffleHero;
