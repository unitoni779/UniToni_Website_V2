import React from 'react';
import { IoDocumentTextOutline, IoNotificationsOutline, IoChatbubblesOutline } from 'react-icons/io5';

const iconStyles = {
  fontSize: '2.5rem', // Adjust the size as needed
  color: '#fff', // Default color for icons
};

const IntegratedLearningTools = () => {
  return (
    <section className="bg-gradient-to-b from-white to-white py-16 font-sans">
  
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
          Integrated Learning Tools
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
          {/* Writing Assistance */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-0">
            <div className="rounded-full p-6 mb-6 transform transition-transform hover:scale-110 bg-yellow-400" style={{backgroundColor:"#0087f7"}}>
              <IoDocumentTextOutline style={{ ...iconStyles }} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Writing Assistance</h3>
            <p className="text-base text-blue-900">
              Whether drafting assignments or collaborating on projects, UniToni's writing tools help you articulate your ideas clearly and effectively.
            </p>
          </div>

          {/* Priority Notifications */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-0">
            <div className="rounded-full p-6 mb-6 transform transition-transform hover:scale-110 bg-yellow-400"  style={{backgroundColor:"#ff9a24"}}>
              <IoNotificationsOutline style={{ ...iconStyles }} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Priority Notifications</h3>
            <p className="text-base text-blue-900">
              Stay on top of important updates with prioritized notifications. Never miss a deadline or an essential communication again.
            </p>
          </div>

          {/* AI Chatbot (Soon) */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-0">
            <div className="rounded-full p-6 mb-6 transform transition-transform hover:scale-110 bg-yellow-400"  style={{backgroundColor:"#0087f7"}}>
              <IoChatbubblesOutline style={{ ...iconStyles }} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">AI Chatbot (Soon)</h3>
            <p className="text-base text-blue-900">
              Spend less time trying to find information about your courses by asking our AI chatbot integrated in UniToni Academic.
            </p>
          </div>
        </div>
  
    </section>
  );
};

export default IntegratedLearningTools;
