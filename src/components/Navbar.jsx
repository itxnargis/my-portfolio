import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    setShowThemes(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base-300 shadow-lg' : 'bg-base-100'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold">
              <span className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-all duration-300 hover:scale-105">
                Nargis
              </span>
            </Link>
            <div className="hidden md:flex space-x-4 items-center">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/education">Education</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="flex items-center">
              <div className="dropdown relative">
                <button
                  onClick={() => setShowThemes(!showThemes)}
                  className="btn btn-ghost btn-circle"
                >
                  <Palette size={20} />
                </button>
                {showThemes && (
                  <ul className="absolute right-0 mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto grid grid-cols-2 gap-2">
                    {themes.map((theme) => (
                      <li key={theme}>
                        <button
                          onClick={() => handleThemeChange(theme)}
                          className={`capitalize ${currentTheme === theme ? 'text-primary font-bold' : ''}`}
                        >
                          {theme}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button onClick={toggleMenu} className="md:hidden btn btn-ghost btn-circle ml-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-base-100 bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-4 right-4 btn btn-ghost btn-circle">
            <X size={24} />
          </button>
          <div className="flex flex-col items-center space-y-6">
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
            <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
            <NavLink to="/skills" onClick={toggleMenu}>Skills</NavLink>
            <NavLink to="/education" onClick={toggleMenu}>Education</NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
          </div>
        </div>
      )}
    </>
  );
};

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-xl rounded-md font-medium transition-all duration-200 relative group ${
        isActive ? 'text-primary font-bold' : 'hover:text-primary'
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
        isActive ? 'w-full' : 'group-hover:w-full'
      }`} />
    </Link>
  );
};

export default Navbar;
