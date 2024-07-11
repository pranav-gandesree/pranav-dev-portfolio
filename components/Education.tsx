// components/Education.tsx

import React from 'react';

interface EducationCardProps {
  collegeName: string;
  branch: string;
  cgpa: string;
  startDate: string;
  endDate: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ collegeName, branch, cgpa, startDate, endDate }) => {
  return (
    <div className="flex flex-col p-6 rounded-lg shadow-lg mb-6 border border-slate-400">
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
        <p className="text-sm text-gray-400">CGPA: {cgpa}</p>
      </div>
    </div>
  );
}

const Education: React.FC = () => {
  return (
    <div className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">🎓 Education</h2>
        <div className="mt-6 space-y-6">
          <EducationCard 
            collegeName="Your University Name" 
            branch="Bachelor of Technology, Computer Science & Engineering" 
            cgpa="8.5" 
            startDate="Sept 2016" 
            endDate="May 2020" 
          />
          <EducationCard 
            collegeName="Your School Name" 
            branch="Higher Secondary Education (Class XII)" 
            cgpa="9.2" 
            startDate="June 2014" 
            endDate="April 2016" 
          />
          {/* Add more EducationCard components as needed */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Education;
