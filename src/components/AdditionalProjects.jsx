import React from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const additionalProjects = [
  {
    title: "Ecommerce Website",
    image: "./ecommerce-image.jpeg",
    description: "A full-featured MERN stack eCommerce platform with advanced features.",
    demoLink: "https://ecommerce-website-front.vercel.app",
    codeLink: "https://github.com/itxnargis/Ecommerce-Website-Frontend"
  },
  {
    title: "Resto Restaurant",
    description: "A demo website for a restaurant showcasing delicious flavors and cozy atmosphere.",
    demoLink: "https://itxnargis.github.io/resto-restaurant/",
    codeLink: "https://github.com/itxnargis/resto-restaurant"
  },
  {
    title: "Explore Lakshadweep",
    description: "An informative travel website for exploring the beauty of Lakshadweep.",
    demoLink: "https://itxnargis.github.io/explore-lakshadweep/",
    codeLink: "https://github.com/itxnargis/explore-lakshadweep"
  }
];

const AdditionalProjects = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto">
      <div className="flex items-center justify-center mb-12">
        <span className="hidden sm:block w-24 h-[2px] bg-amber-400"></span>
        <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Explore More Projects
        </h2>
        <span className="hidden sm:block w-24 h-[2px] bg-amber-400"></span>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-amber-400">
              <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-purple-300 flex items-center transition-colors duration-300 px-4 py-2 bg-rose-50 rounded-md hover:bg-amber-400 hover:text-white"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-purple-300 flex items-center transition-colors duration-300 px-4 py-2 bg-rose-50 rounded-md hover:bg-amber-400 hover:text-white"
                >
                  <Github className="mr-1 h-4 w-4" />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/itxnargis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-400 hover:bg-amber-500 transition-colors duration-300"
          >
            View All Projects
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdditionalProjects;
