import React from 'react';
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
    title: "Spotify Music Finder - Identify Songs Effortlessly",
    description: "An app to identify songs and find their matches on Spotify.",
    image: "./spotify-image.png",
    demoLink: "https://spotify-music-finder-inky.vercel.app",
    codeLink: "https://github.com/itxnargis/spotify-music-finder"
  }
];

const Projects = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 ">
    <div className="container mx-auto">
      <div className="flex items-center justify-center mb-12">
        <span className="hidden sm:block w-24 h-[2px] bg-amber-400"></span>
        <h2 className="text-3xl !leading-normal sm:text-4xl font-bold mx-4 bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Projects
        </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-400"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-amber-400">
    <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-gray-300 text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-200 mb-4">{project.description}</p>
      <div className="flex justify-between">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-black hover:text-purple-300 flex items-center transition-colors duration-300 px-4 py-2 bg-rose-50 rounded-md hover:bg-amber-400 hover:text-white">
        <ExternalLink className="ml-1 h-4 w-4" /> Live Demo
        </a>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-black hover:text-purple-300 flex items-center transition-colors duration-300 px-4 py-2 bg-rose-50 rounded-md hover:bg-amber-400 hover:text-white">
        <Github className="ml-1 h-4 w-4" />  Source Code
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
