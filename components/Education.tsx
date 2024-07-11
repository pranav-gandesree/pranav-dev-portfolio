// components/Education.tsx

import React from 'react';

interface EducationCardProps {
  collegeName: string;
  branch: string;
  cgpa?: string;
  startDate: string;
  endDate: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ collegeName, branch, cgpa, startDate, endDate }) => {
  return (
    <div className="flex flex-col p-6 rounded-lg shadow-lg mb-6 border border-slate-400 hover:border-blue-500 hover:-translate-y-2 transition-all duration-400 cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-2xl font-semibold text-white">{collegeName}</h3>
        </div>
        <div className="text-right">
          <p className="text-gray-400">{startDate} - {endDate}</p>
        </div>
      </div>
      <div>
        <p className="text-lg text-gray-300 mb-2">{branch}</p>
        {cgpa && <p className="text-sm text-gray-400">CGPA: {cgpa}</p>}
      </div>
    </div>
  );
}

const Education: React.FC = () => {
  return (
    <div className="py-12">
    <div className="max-w-7xl mx-auto">
      <div className="text-start">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">🎓 Education</h2>
        <div className="mt-6 space-y-6">
          <EducationCard 
            collegeName="ACE Engineering College" 
            branch="Bachelor of Technology, Computer Science & Engineering " 
            cgpa="8.3" 
            startDate="2020" 
            endDate="2024" 
          />
          <EducationCard 
            collegeName="Abhyaas Junior College" 
            branch="MPC" 
            startDate="2018" 
            endDate="2020" 
          />
          {/* Add more EducationCard components as needed */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Education;
