import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Prescripto - Healthcare Appointment System",
    description: "A web application for healthcare appointments and prescription management.",
    image: "./prescripto-image.png",
    demoLink: "https://prescripto-eta.vercel.app/",
    codeLink: "https://github.com/itxnargis/prescripto"
  },
  {
    title: "LiveChat - Real-Time Communication Platform",
    description: "A real-time chat application built with React and Firebase.",
    image: "./live-chat-app.png",
    demoLink: "https://live-chat-app-weld.vercel.app/",
    codeLink: "https://github.com/itxnargis/live-chat-app"
  },
  {
    title: "Spotify Music Finder",
    description: "An app to identify songs and find their matches on Spotify.",
    image: "./spotify-image.png",
    demoLink: "https://spotify-music-finder-inky.vercel.app",
    codeLink: "https://github.com/itxnargis/spotify-music-finder"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h2 className="leading-normal text-4xl md:text-5xl font-bold !leading-normal mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text transform transition-all duration-500 ease-in-out hover:scale-105">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex justify-between">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center transition-colors duration-300">
          Live Demo <ExternalLink className="ml-1 h-4 w-4" />
        </a>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center transition-colors duration-300">
          Source Code <Github className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

export default Projects;