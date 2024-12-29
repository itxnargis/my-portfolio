import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-gray-800/90'}`}>
      <div className='container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4'>
        <Link to='/' className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          Nargis
        </Link>
        <div className='hidden md:flex space-x-8'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/skills'>Skills</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>

        <div className='md:hidden text-white hover:text-amber-400 transition-colors duration-300'>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-gray-900/95 backdrop-blur-sm py-4 px-4 sm:px-6'>
          <div className='flex flex-col space-y-4'>
            <NavLink to='/' onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to='/about' onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to='/projects' onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink to='/contact' onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className='text-lg font-semibold text-gray-100 hover:text-amber-400 transition-colors duration-300'
  >
    {children}
  </Link>
)

export default Navbar
