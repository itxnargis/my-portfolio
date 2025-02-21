import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import AdditionalProjects from './AdditionalProjects';

const projects = [
  {
    title: "Chess Master",
    description: "A comprehensive web application offering various chess-playing modes, puzzles, and features for all levels.",
    image: "./chess.jpeg",
    demoLink: "https://chess-frontend-dun.vercel.app/",
    codeLink: "https://github.com/itxnargis/chess-frontend",
    icon: "♟️"
  },
  {
    title: "Prescripto - Healthcare Appointment System",
    description: "A web application for healthcare appointments and prescription management.",
    image: "./prescripto-image.png",
    demoLink: "https://prescripto-eta.vercel.app/",
    codeLink: "https://github.com/itxnargis/prescripto",
    icon: "🏥"
  },
  {
    title: "LiveChat - Real-Time Communication Platform",
    description: "A real-time chat application built with React and Firebase.",
    image: "./live-chat-app.png",
    demoLink: "https://live-chat-app-weld.vercel.app/",
    codeLink: "https://github.com/itxnargis/live-chat-app",
    icon: "💬"
  },
  {
    title: "Spotify Music Finder - Identify Songs Effortlessly",
    description: "An app to identify songs and find their matches on Spotify.",
    image: "./spotify-image.png",
    demoLink: "https://spotify-music-finder-inky.vercel.app",
    codeLink: "https://github.com/itxnargis/spotify-music-finder",
    icon: "🎵"
  },
  {
    title: "Ecommerce Website",
    image: "./ecommerce.jpeg",
    description: "A full-featured MERN stack eCommerce platform with advanced features.",
    demoLink: "https://trendz-ecommerce-tau.vercel.app",
    codeLink: "https://github.com/itxnargis/trendz-ecommerce-frontend",
    icon: "🛒"
  },
  {
    title: "Resto Restaurant",
    image: "./resto-restaurant.jpg",
    description: "A demo website for a restaurant showcasing delicious flavors and cozy atmosphere.",
    demoLink: "https://itxnargis.github.io/resto-restaurant/",
    codeLink: "https://github.com/itxnargis/resto-restaurant",
    icon: "🍽️"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
          <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <AdditionalProjects />
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-amber-500">
    <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{project.icon}</span>
        <h3 className="text-xl font-semibold text-amber-500">{project.title}</h3>
      </div>
      <p className="text-gray-300 mb-6">{project.description}</p>
      <div className="flex justify-between">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-purple-300 flex items-center transition-colors duration-300 px-4 py-2 bg-rose-50 rounded-md hover:bg-amber-500 hover:text-white"
        >
          <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-purple-300 flex items-center transition-colors duration-300 px-4 py-2 bg-rose-50 rounded-md hover:bg-amber-500 hover:text-white"
        >
          <Github className="mr-1 h-4 w-4" /> Source Code
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
