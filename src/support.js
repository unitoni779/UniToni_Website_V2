import React, { useState, useEffect, useRef, useCallback } from 'react';
import microsoftImage from './Microsoft-for-Startups.jpg';
import techstarsImage from './Techstars.jpg';
import itucekirdekImage from './itucekirdek.png';
import itu from './itu.jpeg';
import aws from './aws.jpeg';
import './support.css';

function SupportersSection() {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  function resetAnimation() {
    if (innerRef.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if (innerRef.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef.current || !outerRef.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const widthDeficit = parentWidth - width;
    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit > 0) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
  }, [setupInstances]);

  useEffect(() => {
    window.addEventListener('resize', setupInstances);

    return () => {
      window.removeEventListener('resize', setupInstances);
    };
  }, [setupInstances]);

  const supporters = [
    { id: 1, name: 'Microsoft', imageUrl: microsoftImage },
    { id: 2, name: 'TechStars', imageUrl: techstarsImage },
    { id: 3, name: 'ITU Çekirdek', imageUrl: itucekirdekImage },
    { id: 4, name: 'itu', imageUrl: itu },
    { id: 5, name: 'aws', imageUrl: aws },
    // Add more supporters as needed
  ];

  return (
    <div className="bg-white-100 py-12" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-12" style={{ marginBottom: '80px' }}>
            We are proud to be supported by :
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            <div className="col-span-2 md:col-span-3 lg:col-span-4 looper" ref={outerRef}>
              <div className="looper__innerList" ref={innerRef} data-animate="true">
                {[...Array(looperInstances)].map((_, ind) => (
                  <div
                    key={ind}
                    className="looper__listInstance"
                    style={{
                      animationDuration: `${supporters.length * 10}s`, // Adjust animation duration based on the number of supporters
                      animationDirection: 'normal',
                    }}
                  >
                    {supporters.map((supporter, index) => (
                      <div key={index} className="relative group flex justify-center items-center">
                        <img
                          src={supporter.imageUrl}
                          alt={supporter.name}
                          className="max-h-24 max-w-full object-contain rounded-lg transform transition duration-300 group-hover:scale-110 group-hover:shadow-lg"
                        />
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-lg">
                          <p className="text-white text-lg font-semibold text-center">{supporter.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportersSection;
