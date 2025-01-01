import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Home = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
      <h1 className='text-5xl sm:text-6xl md:text-7xl !leading-normal font-bold mb-6 leading-tight bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text transform transition-all duration-500 ease-in-out hover:scale-105'>
        Hi, I'm Nargis
      </h1>
      <h2 className='text-3xl sm:text-4xl mb-8 transform transition-all duration-500 ease-in-out hover:scale-105'>
        Web Developer
      </h2>
      <p className='text-xl mb-12 max-w-2xl transform transition-all duration-500 ease-in-out hover:scale-105'>
        Passionate about creating beautiful and user-friendly web experiences.
      </p>

      <div className='flex justify-center space-x-8 mb-12'>
        <SocialIcon href="https://github.com/itxnargis" icon={Github} label="GitHub" />
        <SocialIcon href="mailto:itxnargiskhatun@gmail.com" icon={Mail} label="Email" />
        <SocialIcon href="https://twitter.com/81283nargis" icon={Twitter} label="Twitter" />
        <SocialIcon href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/" icon={Linkedin} label="LinkedIn" />
      </div>

      <div className='transform transition-all duration-500 ease-in-out hover:scale-110'>
        <Link
          to='/about'
          className='bg-amber-600 hover:bg-amber-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 inline-block hover:shadow-lg'
        >
          Learn more about me
        </Link>
      </div>
    </section>
  )
}

const SocialIcon = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-amber-400 transition-all duration-300 transform hover:scale-125"
    aria-label={label}
  >
    <Icon size={32} />
  </a>
)

export default Home
