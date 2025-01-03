import React from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const additionalProjects = [
  {
    title: "Video Player",
    description: "Seamless video playback with sleek preloader and intuitive controls.",
    demoLink: "https://itxnargis.github.io/video/",
    codeLink: "https://github.com/itxnargis/video",
    icon: "🎬"
  },
  {
    title: "English Dictionary",
    description: "Instant word meanings with a clean, user-friendly interface.",
    demoLink: "https://itxnargis.github.io/english-dictionary/",
    codeLink: "https://github.com/itxnargis/english-dictionary",
    icon: "📚"
  },
  {
    title: "Tic Tac Toe",
    description: "Classic game reimagined with modern web technologies.",
    demoLink: "https://itxnargis.github.io/tic-tac-toe/",
    codeLink: "https://github.com/itxnargis/tic-tac-toe",
    icon: "❌⭕"
  },
  {
    title: "Temperature Converter",
    description: "Effortlessly switch between temperature units with style.",
    demoLink: "https://itxnargis.github.io/temperature-convertor/",
    codeLink: "https://github.com/itxnargis/temperature-convertor",
    icon: "🌡️"
  },
  {
    title: "Grocery Bud",
    description: "Smart grocery list manager with local storage and easy editing.",
    demoLink: "https://itxnargis.github.io/grocery-bud/",
    codeLink: "https://github.com/itxnargis/grocery-bud",
    icon: "🛒"
  },
  {
    title: "Streaming Design",
    description: "Explore Immersive UI for exploring streaming content.",
    demoLink: "https://itxnargis.github.io/streaming-design/",
    codeLink: "https://github.com/itxnargis/streaming-design",
    icon: "📺"
  },
];

const AdditionalProjects = () => {
  return (
    <section id="about" className="py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
          <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Explore More Projects
          </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-amber-500"
            >
              <div className='p-6 relative sm:p-2'>
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-amber-500">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-purple-300 flex items-center justify-center transition-colors duration-300 px-4 py-2 mb-2 sm:mb-0 sm:px-2 bg-rose-50 rounded-md hover:bg-amber-500 hover:text-white"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-purple-300 flex items-center justify-center transition-colors duration-300 px-4 py-2 sm:px-2 bg-rose-50 rounded-md hover:bg-amber-500 hover:text-white"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Source Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://github.com/itxnargis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-amber-500 hover:amber-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ChevronRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdditionalProjects;
