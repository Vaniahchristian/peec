import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`
      backdrop-blur-md bg-green-50 dark:bg-gray-800/70
      shadow-lg w-full sticky top-0 z-50
      border-b border-white/20 dark:border-gray-700/30
    `}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo and Name */}
          <Link to="/" className="flex items-center space-x-4 flex-shrink-0 group">
            <img 
              src="/images/logo.png" 
              alt="PEEC Systems Logo" 
              className="h-12 w-auto transform group-hover:scale-105 transition-transform"
            />
            <h1 className="text-2xl font-bold text-green-800 dark:text-green-400 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors">
              PEEC SYSTEMS
            </h1>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-800 dark:text-green-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="relative text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition-colors">
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link to="/services" className="relative text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition-colors">
              Services
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link to="/about" className="relative text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition-colors">
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link to="/contact" className="relative text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition-colors">
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link to="/blog" className="relative text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition-colors">
              Blog
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`
              p-3 rounded-xl transition-all duration-300
              ${theme === 'dark'
                ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#111827]'
                : 'bg-white shadow-[5px_5px_10px_#d1d5db,-5px_-5px_10px_#ffffff]'
              }
              hover:scale-105
            `}
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2 pb-4">
            <Link to="/" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition px-3 py-2">Home</Link>
            <Link to="/services" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition px-3 py-2">Services</Link>
            <Link to="/about" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition px-3 py-2">About</Link>
            <Link to="/contact" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition px-3 py-2">Contact</Link>
            <Link to="/blog" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition px-3 py-2">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
