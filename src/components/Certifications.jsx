import React from 'react';
import { Award, Medal } from 'lucide-react';

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    icon: "🛡️",
    date: "2022",
  },
  {
    title: "2nd Place, District Level Science & Math Promotion",
    issuer: "Govt. Senior Secondary School",
    icon: "🏅",
    date: "2021",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
          <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Certifications & Achievements
          </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto space-y-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-amber-500"
            >
              <div className="p-6 relative">
  <div className="flex items-center mb-4">
    <div className="text-4xl mr-4">{cert.icon}</div>
    <h3 className="text-2xl font-semibold text-amber-500">{cert.title}</h3>
  </div>
  <p className="text-gray-300 mb-2">{cert.issuer}</p>
  <p className="text-gray-400 mb-6">{cert.date}</p>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
