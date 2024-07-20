import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-32 mb-32 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className=" text-center font-figtree text-3xl font-extrabold md:text-5xl lg:text-6xl sm:text-[#112d42] mb-2 sm:text-4xl">
        <span className="text-[#112d42] text-4xl sm:text-4xl lg:text-5xl">What </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0087f7] to-[#ff9a24] text-4xl sm:text-4xl lg:text-5xl">differentiates us?</span>
      </h2>
      <div className="overflow-hidden relative">
        {/* Slide 1 */}
        <div
          className={`w-full transition-transform duration-1000 ease-in-out transform ${
            activeIndex === 0 ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ display: activeIndex === 0 ? 'block' : 'none' }}
        >
          <div className="relative p-10 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 font-figtree relative z-10 text-[#0087f7]">
              Unified Platform
            </h2>
            <p className="text-xl text-[#112d42] font-figtree relative z-10">
              UniToni integrates learning management, clubs management, and social engagement into a unified platform, enriching university experience and interaction.
            </p>
            <div className="relative mt-6 flex items-center justify-between">
              <FaArrowLeft 
                onClick={goToPreviousSlide} 
                className="cursor-pointer text-gray-800 p-2" 
                size={32}
              />
              <div className="flex-1 mx-4 h-3 bg-gray-200 rounded-full overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r"
                  style={{
                    background: `linear-gradient(90deg, #0087f7 0%, #0087f7 ${((activeIndex + 1) / 3) * 100}%, rgba(255,255,255,0) ${((activeIndex + 1) / 3) * 100}%)`,
                    transition: 'background 0.5s ease',
                  }}
                ></div>
                <div
                  className={`absolute inset-0 rounded-full animate-pulse`}
                  style={{ borderColor: '#0087f780' }}
                ></div>
              </div>
              <FaArrowRight 
                onClick={goToNextSlide} 
                className="cursor-pointer text-gray-800 p-2" 
                size={32}
              />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`w-full transition-transform duration-1000 ease-in-out transform ${
            activeIndex === 1 ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ display: activeIndex === 1 ? 'block' : 'none' }}
        >
          <div className="relative p-10 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 font-figtree relative z-10 text-[#ff9a24]">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-[#112d42] font-figtree relative z-10">
              UniToni's revenue-sharing model with universities transforms education into investment, aligning academic goals with innovation for sustainable growth.
            </p>
            <div className="relative mt-6 flex items-center justify-between">
              <FaArrowLeft 
                onClick={goToPreviousSlide} 
                className="cursor-pointer text-gray-800 p-2" 
                size={32}
              />
              <div className="flex-1 mx-4 h-3 bg-gray-200 rounded-full overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r"
                  style={{
                    background: `linear-gradient(90deg, #ff9a24 0%, #ff9a24 ${((activeIndex + 1) / 3) * 100}%, rgba(255,255,255,0) ${((activeIndex + 1) / 3) * 100}%)`,
                    transition: 'background 0.5s ease',
                  }}
                ></div>
                <div
                  className={`absolute inset-0 rounded-full animate-pulse`}
                  style={{ borderColor: '#ff9a2480' }}
                ></div>
              </div>
              <FaArrowRight 
                onClick={goToNextSlide} 
                className="cursor-pointer text-gray-800 p-2" 
                size={32}
              />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className={`w-full transition-transform duration-1000 ease-in-out transform ${
            activeIndex === 2 ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ display: activeIndex === 2 ? 'block' : 'none' }}
        >
          <div className="relative p-10 bg-gray-100 rounded-lg shadow-md">
            <span className="text-3xl font-bold mb-4 font-figtree relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0087f7] to-[#ff9a24]">
              Academic-Business Bridge
            </span>
            <p className="text-xl text-[#112d42] font-figtree relative z-10">
              UniToni bridges academia and businesses, fostering collaboration and enhancing educational experiences through direct engagement opportunities.
            </p>
            <div className="relative mt-6 flex items-center justify-between">
              <FaArrowLeft 
                onClick={goToPreviousSlide} 
                className="cursor-pointer text-gray-800 p-2" 
                size={32}
              />
              <div className="flex-1 mx-4 h-3 bg-gray-200 rounded-full overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r"
                  style={{
                    background: `linear-gradient(90deg, #0087f7 0%, #ff9a24 ${((activeIndex + 1) / 3) * 100}%, rgba(255,255,255,0) ${((activeIndex + 1) / 3) * 100}%)`,
                    transition: 'background 0.5s ease',
                  }}
                ></div>
                <div
                  className={`absolute inset-0 rounded-full animate-pulse`}
                  style={{ borderColor: '#0087f780' }}
                ></div>
              </div>
              <FaArrowRight 
                onClick={goToNextSlide} 
                className="cursor-pointer text-gray-800 p-2" 
                size={32}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
