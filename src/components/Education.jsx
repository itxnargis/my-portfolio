import React from 'react';
import Certifications from './Certifications';

const educationData = [
  {
    institution: "Pt. J. L. N. Govt. College, Faridabad",
    duration: "2021 - 2024",
    course: "Bachelor of Computer Applications (BCA)",
    field: "Information Technology",
    icon: "🎓",
    website: "https://www.jlngcfaridabad.ac.in/"
  },
  {
    institution: "Govt. Senior Secondary School, Sehatpur",
    duration: "2019 - 2021",
    course: "Senior Secondary Education",
    field: "Issued by Haryana Board of Secondary Education (HBSE)",
    icon: "📚",
    website: "http://www.bseh.org.in/"
  },
  {
    institution: "Govt. Senior Secondary School, Sehatpur",
    duration: "2017 - 2019",
    course: "High School Education",
    field: "Issued by Haryana Board of Secondary Education (HBSE)",
    icon: "🏫",
    website: "http://www.bseh.org.in/"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
          <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Education
          </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-amber-500"
            >
              <div className="p-6 relative">
  <div className="flex items-center mb-4">
    <div className="text-4xl mr-4">{edu.icon}</div>
    <h3 className="text-2xl font-semibold text-amber-500">{edu.institution}</h3>
  </div>
  <p className="text-gray-300 mb-2">{edu.duration}</p>
  <p className="text-lg font-medium mb-1">{edu.course}</p>
  <p className="text-base-content/80 mb-6">{edu.field}</p>
</div>

            </div>
          ))}
        </div>
      </div>

      <Certifications />
    </section>
  );
};

export default Education;
