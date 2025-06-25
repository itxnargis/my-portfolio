import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Palette } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('default');
  const [showThemes, setShowThemes] = useState(false);
  const location = useLocation();

  const themes = [
    "default", "light", "dark", "cupcake", "emerald", "corporate", "synthwave",
    "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
    "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula",
    "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setShowThemes(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    setShowThemes(false);
    document.documentElement.setAttribute('data-theme', theme);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-white dark:bg-gray-900"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600 text-transparent bg-clip-text transition-all duration-300 hover:scale-105"
              aria-label="Nargis - Homepage"
            >
              Nargis
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/education">Education</NavLink>
              <NavLink to="/contact">Contact</NavLink>

              <div className="dropdown relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowThemes(!showThemes);
                  }}
                  className="btn btn-ghost btn-circle text-white hover:bg-amber-100 dark:hover:bg-amber-900/20"
                  aria-label="Change theme"
                >
                  <Palette size={20} />
                </button>
                {showThemes && (
                  <ul className="absolute right-0 mt-3 p-2 shadow-lg menu menu-compact dropdown-content bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-1">
                      {themes.map((theme) => (
                        <li key={theme}>
                          <button
                            onClick={() => handleThemeChange(theme)}
                            className={`capitalize text-sm py-2 px-3 rounded hover:bg-amber-100 dark:hover:bg-amber-900/20 ${
                              currentTheme === theme ? 'text-amber-600 font-bold bg-amber-50 dark:bg-amber-900/10' : ''
                            }`}
                          >
                            {theme}
                          </button>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </div>
            </div>

            <div className="flex items-center md:hidden">
              <div className="dropdown relative mr-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowThemes(!showThemes);
                  }}
                  className="btn btn-ghost text-white btn-circle hover:bg-amber-100 dark:hover:bg-amber-900/20"
                  aria-label="Change theme"
                >
                  <Palette size={20} />
                </button>
                {showThemes && (
                  <ul className="absolute right-0 mt-3 p-2 shadow-lg menu menu-compact dropdown-content bg-base-100 rounded-box w-48 max-h-80 overflow-y-auto border border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-1">
                      {themes.map((theme) => (
                        <li key={theme}>
                          <button
                            onClick={() => handleThemeChange(theme)}
                            className={`capitalize text-sm py-2 px-2 rounded hover:bg-amber-100 dark:hover:bg-amber-900/20 ${
                              currentTheme === theme ? 'text-amber-600 font-bold bg-amber-50 dark:bg-amber-900/10' : ''
                            }`}
                          >
                            {theme}
                          </button>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </div>

              <button 
                onClick={toggleMenu} 
                className="btn btn-ghost btn-circle text-white hover:bg-amber-100 dark:hover:bg-amber-900/20"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-16 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <MobileNavLink to="/" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>
              About
            </MobileNavLink>
            <MobileNavLink to="/projects" onClick={toggleMenu}>
              Projects
            </MobileNavLink>
            <MobileNavLink to="/skills" onClick={toggleMenu}>
              Skills
            </MobileNavLink>
            <MobileNavLink to="/education" onClick={toggleMenu}>
              Education
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

const NavLink = ({ to, children }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`relative font-medium text-base transition-colors duration-200 hover:text-amber-600 dark:hover:text-amber-400 ${
        isActive ? "text-amber-600 dark:text-amber-400" : "text-gray-800 dark:text-gray-200"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 dark:bg-amber-400 transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  )
}

const MobileNavLink = ({ to, children, onClick }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-xl font-medium transition-colors duration-200 hover:text-amber-600 dark:hover:text-amber-400 ${
        isActive ? "text-amber-600 dark:text-amber-400" : "text-gray-800 dark:text-gray-200"
      }`}
    >
      {children}
    </Link>
  )
}

export default Navbar