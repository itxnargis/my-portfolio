import React from 'react';
import { Book, Calendar } from 'lucide-react';
import Certifications from './Certifications';

const educationData = [
  {
    institution: "Pt. J. L. N. Govt. College, Faridabad",
    duration: "2021 - 2024",
    course: "Bachelor of Computer Applications (BCA)",
    field: "Information Technology",
    logo: "./college logo.jfif"
  },
  {
    institution: "Govt. Senior Secondary School, Sehatpur",
    duration: "2019 - 2021",
    course: "Senior Secondary Education",
    field: "Issued by Haryana Board of Secondary Education (HBSE)",
    logo: "./hbse-logo.jpg"
  },
  {
    institution: "Govt. Senior Secondary School, Sehatpur",
    duration: "2017 - 2019",
    course: "High School Education",
    field: "Issued by Haryana Board of Secondary Education (HBSE)",
    logo: "./hbse-logo.jpg"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span className="hidden sm:block w-24 h-[2px] bg-amber-400"></span>
          <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent">
            Education
          </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-400"></span>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-amber-400">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                  <p className="text-primary flex items-center justify-center md:justify-start mb-2">
                    <Calendar className="mr-2" size={18} />
                    {edu.duration}
                  </p>
                  <p className="text-lg font-medium mb-1">{edu.course}</p>
                  <p className="text-base-content/80 flex items-center justify-center md:justify-start">
                    <Book className="mr-2" size={18} />
                    {edu.field}
                  </p>
                </div>
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
