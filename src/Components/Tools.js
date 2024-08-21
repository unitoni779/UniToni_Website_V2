import React from 'react';
import { IoThumbsUpOutline, IoTimeOutline, IoHandDownOutline } from 'react-icons/io5';
import { PiHandFist } from "react-icons/pi";

const iconStyles = {
  fontSize: '2.5rem', // Adjust the size as needed
  color: '#fff', // Default color for icons
};

const IntegratedLearningTools = () => {
  return (
    <section className="bg-gradient-to-b from-white to-white py-16 font-figtree" style={{marginRight:"100px",marginLeft:"100px"}}>
  
       
        <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
      
          <div className="flex flex-col items-center text-center mb-12 md:mb-0">
            <div className="rounded-full p-6 mb-6 transform transition-transform hover:scale-110 bg-yellow-400" style={{backgroundColor:"#0087f7"}}>
              <IoThumbsUpOutline style={{ ...iconStyles }} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">EASY</h3>
            <p className="text-base text-blue-900">
              Simple to set up and use. Our platform automates your routine tasks, so you can focus on developing.
            </p>
          </div>

    
          <div className="flex flex-col items-center text-center mb-12 md:mb-0">
            <div className="rounded-full p-6 mb-6 transform transition-transform hover:scale-110 bg-yellow-400" style={{backgroundColor:"#ff9a24"}}>
              <IoTimeOutline style={{ ...iconStyles }} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">EFFICIENT</h3>
            <p className="text-base text-blue-900">
              From plans to assignments to university social life and reports. All you need, connected seamlessly in one unified platform.
            </p>
          </div>

    
          <div className="flex flex-col items-center text-center mb-12 md:mb-0">
            <div className="rounded-full p-6 mb-6 transform transition-transform hover:scale-110 bg-yellow-400" style={{backgroundColor:"#0087f7"}}>
              <PiHandFist style={{ ...iconStyles }} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">EMPOWERING</h3>
            <p className="text-base text-blue-900">
              Connect with your students. Keep them engaged with positive feedback and better university experience.
            </p>
          </div>
        </div>
  
    </section>
  );
};

export default IntegratedLearningTools;
