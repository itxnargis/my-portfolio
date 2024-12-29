import React from 'react'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center space-x-8 mb-6'>
          <SocialIcon href="https://github.com/itxnargis" icon={Github} label="GitHub" />
          <SocialIcon href="mailto:itxnargiskhatun@gmail.com" icon={Mail} label="Email" />
          <SocialIcon href="https://twitter.com/81283nargis" icon={Twitter} label="Twitter" />
          <SocialIcon href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/" icon={Linkedin} label="LinkedIn" />
        </div>
        <p className='text-center text-gray-500 hover:text-amber-400 transition-all duration-300 transform hover:scale-125'>&copy; {new Date().getFullYear()} Nargis Khatun. All rights reserved.</p>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-125"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <Icon className='h-6 w-6' aria-hidden='true' />
  </a>
)

export default Footer
