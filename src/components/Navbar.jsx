import { MenuIcon, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className='container mx-auto flex justify-between items-center px-4 py-4'>
        <Link to='/' className='uppercase text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          Nargis
        </Link>
        <div className='hidden md:flex space-x-8 text-black'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size='24' /> : <MenuIcon size='24' />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-gray-800 text-black py-8 font-semibold flex flex-col space-y-4 text-center h-screen text-lg'>
          <NavLink to='/' onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to='/about' onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to='/projects' onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to='/contact' onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className='block text-lg font-semibold text-gray-300 hover:text-purple-400'
  >{children}
  </Link>
)

export default Navbar
