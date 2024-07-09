import React from 'react';

const ServicesSection = () => {
    return (
        <div className="bg-gradient-to-b from-white to-white font-figtree">
            <div className=" h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5 font-figtree" style={{ fontFamily: "'GT Eesti', sans-serif" }}>
              
                <div className="w-full">
              
            <h2 className="text-3xl font-bold mb-8 text-center text-[#112d42] font-figtree">
            TOGETHER WE HELP YOU ELEVATE LEARNING AND CAMPUS LIFE
            </h2>
     
                    <div className="flex flex-col w-full mb-5 sm:flex-row">
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 text-[#112d42] font-figtree">INTEGRATIONS</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">------------</p>
                                    <p className="mb-2 text-gray-600 text-[#112d42] font-figtree">
                                    Seamlessly integrate our comprehensive learning tools with your university system. Experience unified access to social and academic features with a single login.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-500 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-yellow-500 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 text-[#112d42] font-figtree">IMPLEMENTATION</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-500 uppercase">------------</p>
                                    <p className="mb-2 text-gray-600 text-[#112d42] font-figtree">
                                    Empowering university to create dynamic learning and social environments. Trust UniToni as your dedicated campus partner, supporting you every step of the way                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="relative h-full ml-0 md:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 rounded-lg"></span>
                                <div className="relative h-full p-5 bg-white border-2 border-blue-500 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 text-[#112d42] font-figtree">PRIVACY COMMITMENT</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-blue-500 uppercase">------------</p>
                                    <p className="mb-2 text-gray-600 text-[#112d42] font-figtree">
                                    Prioritizing your privacy with advanced security measures. UniToni ensures robust protection of your data, maintaining confidentiality and trust.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
