import React from 'react';
import { Link } from 'react-router-dom';
import tasarim from './freepik-new-project-20240709053418tlF6.png';
import google from './google.png';
import app2 from './app2.png';
import './App.css'; // Ensure the CSS is imported

const ShuffleHero = () => {
    return (
        <div className="relative bg-gradient-to-b from-white to-white">
            <section className="overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
                    <div className="relative w-full overflow-hidden lg:w-7/12 lg:order-2">
                        <div className="lg:absolute lg:bottom-0 lg:left-0">
                            <img
                                className="w-full"
                                src={tasarim}
                                alt=""
                                style={{
                                    transform: 'scale(1.4)', // Flip the image horizontally
                                    width: '2000px', // Ensure it does not exceed the container's width
                                    height: 'auto', // Maintain aspect ratio
                                    marginLeft: "100px",
                                    marginBottom: "300px"
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full lg:order-1 lg:w-7/12">
                        <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-22 lg:pt-40 lg:pb-14">
                            <div className="flex flex-col justify-between flex-1 h-full">
                                <div>
                                    <h1 className="text-3xl font-bold sm:text-6xl xl:text-7xl leading-tight text-[#112d42]">
                                        The Future of Education is <span className="text-[#ff9a24]">Here</span>
                                    </h1>

                                    <p className="mt-6 text-lg text-[#112d42]">
                                        UniToni is easy, modern, saves time, and combines 3 systems into one platform.
                                    </p>
                                    <Link
    to="/demo"
    className="inline-flex items-center px-5 py-4 text-xl font-semibold text-white transition-all duration-200 shadow-lg hover:bg-yellow-500 focus:bg-yellow-500 mt-8 rounded-full"
    style={{
        backgroundColor: "rgba(0, 135, 247, 0.6)",
        marginTop: "70px",
        border: "none"
    }}
>
    BOOK DEMO
</Link>

                                    <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                                        <a href="#" title="" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80 mt-[-40px]">
                                            <img className="w-auto rounded h-14 sm:h-16" src={google} alt="" style={{
                                                transform: 'scale(1)',
                                                maxWidth: '100%',
                                                height: 'auto',
                                            }} />
                                        </a>
                                        <a href="#" title="" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80 mt-[-40px]">
                                            <img className="w-auto rounded h-14 sm:h-16" src={app2} alt="" style={{
                                                transform: 'scale(1)',
                                                maxWidth: '100%',
                                                height: 'auto',
                                            }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ShuffleHero;
