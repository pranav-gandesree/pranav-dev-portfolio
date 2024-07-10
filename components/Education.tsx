// components/Education.tsx

import React from 'react';

interface EducationCardProps {
  collegeName: string;
  branch: string;
  cgpa: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ collegeName, branch, cgpa }) => {
  return (
    <div className="flex mt-12 border border-slate-300 rounded-lg">
      <div className="ml-4">
        <h3 className="text-2xl leading-6 font-medium text-slate-200">{collegeName}</h3>
        <p className="mt-2 text-base text-gray-500">{branch}</p>
        <p className="mt-2 text-sm text-gray-500">CGPA: {cgpa}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Education</h2>
          <div className="mt-6 space-y-12">
            <EducationCard collegeName="Your University Name" branch="Bachelor of Technology, Computer Science & Engineering" cgpa="8.5" />
            <EducationCard collegeName="Your School Name" branch="Higher Secondary Education (Class XII)" cgpa="9.2" />
            {/* Add more EducationCard components as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
