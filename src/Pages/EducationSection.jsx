import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-8">
          {/* Graduation Block */}
          <div className="flex items-start gap-4 mb-8 md:mb-0 group">
            <div className="text-4xl text-blue-500 mt-1 transition-transform duration-300 group-hover:scale-110">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-1 group-hover:text-white transition-colors duration-300">
                Graduation
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-medium">College:</span> Govt Bangla College, affiliated with Dhaka University
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-medium">Department:</span> Physics
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-medium">Duration:</span> 1/1/2028 - 7/10/2024
              </p>
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
