import React from 'react';
import { Award, Medal } from 'lucide-react';

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    icon: <Award className="w-8 h-8 text-primary" />
  },
  {
    title: "2nd Place, District Level Science & Math Promotion",
    issuer: "Govt. Senior Secondary School",
    icon: <Medal className="w-8 h-8 text-primary" />
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span className="hidden sm:block w-24 h-[2px] bg-amber-400"></span>
          <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent">
            Certifications & Achievements
          </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-400"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-amber-400">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-base-content/80">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
