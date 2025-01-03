import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from './Education';

const About = () => {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
          <h2 className="text-3xl sm:text-4xl font-bold mx-4 bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            About Me
          </h2>
          <span className="hidden sm:block w-24 h-[2px] bg-amber-500"></span>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg sm:text-xl !font-base sm:text-lg leading-relaxed transform transition-all duration-500 ease-in-out hover:scale-105">
            I'm Nargis, an aspiring frontend developer with a passion for creating stunning web experiences. My expertise spans HTML, CSS, JavaScript, Tailwind CSS, React, and C++. Currently pursuing a Bachelor of Computer Applications (BCA), I'm on a journey to push the boundaries of web development.
          </p>

          <p className="text-lg sm:text-xl !font-base leading-relaxed transform transition-all duration-500 ease-in-out hover:scale-105">
            With a keen eye for detail and a commitment to excellence, I thrive on turning complex problems into elegant solutions. My goal is to create web applications that not only meet but exceed user expectations, blending functionality with aesthetics seamlessly.
          </p>

          <div className="p-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">What Drives Me</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Crafting intuitive and responsive user interfaces</li>
              <li>Optimizing performance for lightning-fast web applications</li>
              <li>Staying updated with the latest web technologies and best practices</li>
              <li>Collaborating with teams to bring innovative ideas to life</li>
            </ul>
          </div>
        </div>

        <Skills />
      </div>

      <Projects />
      <Education />
      <Contact />
    </section>
  );
};

export default About;
