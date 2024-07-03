import React from 'react';
import { AiOutlineBulb, AiOutlineLock, AiOutlineTeam } from 'react-icons/ai';

const Differentiators = () => {
  return (

      <div className="bg-white rounded-lg p-8 mb-4">
        <h2 className="text-4xl font-bold mb-8 text-center font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
          What Differentiates Us?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Smart */}
          <div className="text-left bg-orange-500 text-white rounded-lg p-8 h-full" style={{backgroundColor:"#0087f7"}}>
            <AiOutlineBulb className="text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-4 font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Smart
            </h3>
            <p className="text-lg text-gray-200 font-sans leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Plan your time and stay updated with your courses and assignments with the help of our artificial intelligence (AI) chat bot.
            </p>
          </div>

          {/* Secure */}
          <div className="text-left bg-blue-500 text-white rounded-lg p-8 h-full" style={{backgroundColor:"#ff9a24"}}>
            <AiOutlineLock className="text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-4 font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Secure
            </h3>
            <p className="text-lg text-gray-200 font-sans leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Your data is processed securely on our servers, with strict protocols to safeguard your privacy.
            </p>
          </div>

          {/* Engaging */}
          <div className="text-left bg-blue-400 text-white rounded-lg p-8 h-full" style={{backgroundColor:"#0087f7"}}>
            <AiOutlineTeam className="text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-4 font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Engaging
            </h3>
            <p className="text-lg text-gray-200 font-sans leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Create and join university-specific social networks and participate in vibrant academic and social communities.
            </p>
          </div>
        </div>
      </div>

  );
};

export default Differentiators;
