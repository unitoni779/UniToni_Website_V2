import React, { useState, useEffect, useRef, useCallback } from 'react';
import microsoftImage from './Microsoft-for-Startups.jpg';
import techstarsImage from './Techstars.jpg';
import itucekirdekImage from './itucekirdek.png';
import itu from './itu.jpeg';
import aws from './aws.jpeg';
import nvi from './nvi.jpg';
import center from './center.jpg';
import './support.css';

function SupportersSection() {
  const [looperInstances, setLooperInstances] = useState(2); // Default to 2 instances for seamless looping
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const setupInstances = useCallback(() => {
    if (!innerRef.current || !outerRef.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const widthDeficit = parentWidth - width;
    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit > 0) {
      setLooperInstances(looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1);
    }
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
    { id: 4, name: 'ITU', imageUrl: itu },
    { id: 5, name: 'AWS', imageUrl: aws },
    { id: 6, name: 'ITU', imageUrl: nvi },
    { id: 7, name: 'AWS', imageUrl: center },
    // Add more supporters as needed
  ];

  return (
    <div className="bg-white-100 py-10 font-figtree" style={{  maxHeight: "300px" }}>

      <h2 className="text-center text-4xl font-bold text-gray-900 mb-12 font-figtree" style={{ color: "#112d42" }}>
        We are proud to be supported by:
      </h2>

      <div className="looper" ref={outerRef}>
        <div className="looper__innerList" ref={innerRef}>
          {[...Array(looperInstances)].map((_, ind) => (
            <div key={ind} className="looper__listInstance">
              {supporters.map((supporter, index) => (
                <div key={index} className="relative group flex justify-center items-center">
                  <img
                    src={supporter.imageUrl}
                    alt={supporter.name}
                    className="max-h-24 max-w-full object-contain rounded-lg transform transition duration-300 :scale-110 :shadow-lg"
                  />
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 :opacity-100 transition duration-300 bg-black bg-opacity-50 rounded-lg">
                 
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default SupportersSection;
