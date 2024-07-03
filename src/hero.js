import React from 'react';
import tasarim from './hero.png';
import google from './google.png';
import app2 from './app2.png';

const ShuffleHero = () => {
    return (
        <div className="relative bg-gradient-to-b from-white to-white font-sans">
            <section className="overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
                    <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-2">
                        <div className="lg:absolute lg:bottom-10 lg:left-10">
                            <img
                                className="w-full"
                                src={tasarim}
                                alt=""
                                style={{
                                    transform: 'scale(1)', // Flip the image horizontally
                                    maxWidth: '100%', // Ensure it does not exceed the container's width
                                    height: 'auto', // Maintain aspect ratio
                                    marginLeft:"60px"
                               
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full lg:order-1 lg:w-7/12">
                        <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                            <div className="flex flex-col justify-between flex-1 h-full">
                                <div>
                                    <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl leading-tight">The Future of Education is Here</h1>
                                    <p className="mt-6 text-lg text-black">UniToni is easy, modern, saves time, and combines 3 systems into one platform.</p>
                                    <a href="#" title="" className="inline-flex items-center px-6 py-5 text-xl font-semibold text-white transition-all duration-200 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500 focus:bg-yellow-500 mt-8" style={{ backgroundColor: "#0097f7", marginTop:"70px"}}> BOOK DEMO </a>
                                    <div className="flex items-center mt-5 space-x-5 sm:mt-0"  >
                                        
                                            <a href="#" title="" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80" role="button">
                                                <img className="w-auto rounded h-14 sm:h-16" src={google} alt="" style={{
                                    transform: 'scale(1)', // Flip the image horizontally
                                    maxWidth: '100%', // Ensure it does not exceed the container's width
                                    height: 'auto', // Maintain aspect ratio
                                  
                               
                                }} />
                                            </a>

                                            <a href="#" title="" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80" role="button">
                                                <img className="w-auto rounded h-14 sm:h-16" src={app2} alt=""style={{
                                    transform: 'scale(1)', // Flip the image horizontally
                                    maxWidth: '100%', // Ensure it does not exceed the container's width
                                    height: 'auto', // Maintain aspect ratio
                                  
                               
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
