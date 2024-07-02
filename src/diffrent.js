import React from 'react';
import { IoSchoolOutline, IoLockClosedOutline, IoPeopleOutline } from 'react-icons/io5';

const DifferentiatorsSection = () => {
    return (
        <section className="bg-gradient-to-b from-white to-blue-white py-16 font-sans">
            <div className="container mx-auto px-4">
               
                <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
                What differentiates us?
               </h2>
                <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
                    <div className="max-w-md mx-auto p-6 bg-yellow-400 rounded-lg shadow-lg mb-8 md:mb-0 h-full" style={{ backgroundColor: "#ff9a24" }}>
                        <IoSchoolOutline className="text-4xl text-blue-900 mb-4" />
                        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Smart</h3>
                        <p className="text-base text-blue-900 mb-4">
                            Plan your time and stay updated with your courses and assignments with the help of our artificial intelligence (AI) chat bot.
                        </p>
                    </div>
                    <div className="max-w-md mx-auto p-6 bg-blue-400 rounded-lg shadow-lg h-full" style={{ backgroundColor: "#0087f7" }}>
                        <IoLockClosedOutline className="text-4xl text-white mb-4" />
                        <h3 className="text-2xl font-semibold text-white mb-4">Secure</h3>
                        <p className="text-base text-white mb-4">
                            Your data is processed securely on our servers, with strict protocols to safeguard your privacy.
                        </p>
                    </div>
                    <div className="max-w-md mx-auto p-6 bg-yellow-400 rounded-lg shadow-lg h-full" style={{ backgroundColor: "#ff9a24" }}>
                        <IoPeopleOutline className="text-4xl text-blue-900 mb-4" />
                        <h3 className="text-2xl font-semibold text-blue-900 mb-4">Engaging</h3>
                        <p className="text-base text-blue-900 mb-4">
                            Create and join university-specific social networks and participate in vibrant academic and social communities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DifferentiatorsSection;
