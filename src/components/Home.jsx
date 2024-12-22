import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center px-4'>
      <h1 className='text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text tranform transition-all duration-500 ease-in-out hover:scale-105'>Hi, I'm Nargis</h1>
      <h2 className='text-3xl md:text-4xl mb-8 tranform transition-all duration-500 ease-in-out hover:scale-105'>Web Developer</h2>
      <p className='text-xl mb-12 max-w-2xl tranform transition-all duration-500 ease-in-out hover:scale-105'>Passionate about creating beautiful and user-friendly web experiences.</p>

      <div className='flex justify-center space-x-6 mb-12'>
        <SocialIcon href="https://github.com/itxnargis" icon={Github} />
        <SocialIcon href="mailto:itxnargiskhatun@gmail.com" icon={Mail} />
        <SocialIcon href="https://twitter.com/81283nargis" icon={Twitter} />
        <SocialIcon href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/" icon={Linkedin} />
      </div>

      <div className='tranform transition-all duration-500 ease-in-out hover:scale-105'>
        <Link to='/about'
          className='bg-purple-600 hover:bg-purple-700 font-bold px-6 py-3 rounded-full transition-colors duration-300 inline-block'
        >
          Learn more about me </Link>
      </div>
    </div>
  )
}

const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-purple-700 transition-colors duration-300 transform hover:scale-110"
  >
    <Icon size={28} />
  </a>
)

export default Home