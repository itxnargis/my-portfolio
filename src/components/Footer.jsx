import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center space-x-6 mb-4'>
        <SocialIcon href="https://github.com/itxnargis" icon={Github} />
        <SocialIcon href="mailto:itxnargiskhatun@gmail.com" icon={Mail} />
        <SocialIcon href="https://twitter.com/81283nargis" icon={Twitter} />
        <SocialIcon href="https://www.linkedin.com/in/nargis-khatun-4008ab2a9/" icon={Linkedin} />
        </div>
        <p className='text-center text-gray-500'>&copy; Nargis Khatun. All rights reserved.</p>
</div>
    </footer>
  )
}

const SocialIcon = ({ href, icon: Icon, label }) => (
  <a href={href} className="text-gray-400 hover:text-purple-700 transition-colors duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer">
    <span className='sr-only'>{label}</span>
    <Icon className='h-6 w-6' aria-hidden='true' />
  </a>
)

export default Footer
