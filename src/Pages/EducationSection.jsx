import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const EducationSection = () => {
  return (
    <section className="bg-gray-900 text-white py-24 px-4 content-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education & Certificates</h2>

        <div className="flex flex-col md:flex-row md:justify-between justify-between md:gap-8 ">
          {/* Academic / Graduation Block */}
          <div className="flex  gap-4 mb-8 md:mb-0 group flex-1">
            <div className="text-4xl text-blue-500 mt-1 transition-transform duration-300 group-hover:scale-110">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-1 group-hover:text-white transition-colors duration-300">
                Graduation
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-medium">College:</span> Govt Bangla College, Dhaka University
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-medium">Department:</span> Physics
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-medium">Duration:</span> 1/1/2018 - 7/10/2024
              </p>
            </div>
          </div>

          {/* Programming Hero Certificates Block */}
          <div className="flex items-start gap-4 group flex-1 lg:ml-96">
            <div className="text-4xl text-blue-500 mt-1 transition-transform duration-300 group-hover:scale-110">
              <FaCertificate />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-1 group-hover:text-white transition-colors duration-300">
                Programming Hero Certificates
              </h3>
              <ul className="text-gray-300 list-disc pl-5">
                <li>Frontend Web Development</li>
                <li>React JS Mastery</li>
                <li>JavaScript Advanced Concepts</li>
                <li>Fullstack Project Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
