const About = () => {

  const skills = [
    "HTML & CSS", "Javascript", "React.js", "Tailwind CSS", "Responsive WEb Design", "Version Control (Git)", "C++"
  ]

  return (
    <div className='min-h-screen py-20 px-4'>
      <div className='container mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text transform transition-all duration-500 ease-in-out hover:scale-105'>
          About Me
        </h2>
        <div className='max-w-3xl mx-auto'>
          <p className='text-lg mb-6 transform transition-all duration-500 ease-in-out hover:scale-105'>
            I'm Nargis, an aspiring frontend developer with expertise in HTML, CSS, JavaScript, Tailwind CSS, React, and C++.
            Currently pursuing a Bachelor of Computer Applications (BCA), I'm passionate about crafting visually stunning
            and user-friendly web experiences.
          </p>

          <p className='text-lg mb-12 transform transition-all duration-500 ease-in-out hover:scale-105'>
            With a keen eye for detail and a commitment to delivering high-quality results, I'm eager to contribute to
            exciting projects and collaborate with fellow developers. My goal is to create web applications that not only
            look great but also provide seamless user experiences.
          </p>
          <h3 className='text-2xl font-bold mb-6 text-purple-400 transform transition-all duration-500 ease-in-out hover:scale-105'>Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
              className='bg-gray-800 rounded-lg p-4 text-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700'
                key={skill}
              >
                {skill}
              </div>
            ))}

          </div>

          <div className="text-center mt-12 transform transition-all duration-300 ease-in-out hover:scale-105">
            <a href="/CV.pdf"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full inline-block transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            >
              Download CV
              <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
