import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { RiThumbUpLine } from 'react-icons/ri';
import { FaRegLightbulb } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <div className="bg-white-100 py-12 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-500 transform hover:scale-110 transition duration-300 ease-in-out">
              <BsCheckCircle />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 font-semibold">EASY</h2>
              <p className="text-lg text-gray-600">Effortless setup and user-friendly. UniToni's comprehensive platform automates routine operations, allowing you to prioritize development and growth.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-500 transform hover:scale-110 transition duration-300 ease-in-out">
              <RiThumbUpLine />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 font-semibold">EFFICIENT</h2>
              <p className="text-lg text-gray-600">Efficiently manage everything from planning and task assignments to reporting with UniToni’s seamlessly integrated social and academic tools all in one platform.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl text-yellow-500 transform hover:scale-110 transition duration-300 ease-in-out">
              <FaRegLightbulb />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 font-semibold">EMPOWERING</h2>
              <p className="text-lg text-gray-600">Facilitate connection with professors, students, and clubs while fostering engagement through personalized feedback and educational support with UniToni.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
