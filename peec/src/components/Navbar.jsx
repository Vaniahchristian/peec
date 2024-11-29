import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-50 dark:bg-gray-800 shadow-lg w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo and Name */}
          <Link to="/" className="flex items-center space-x-4 flex-shrink-0">
            <img 
              src="/images/logo.png" 
              alt="PEEC Systems Logo" 
              className="h-12 w-auto"
            />
            <h1 className="text-2xl font-bold text-green-800 dark:text-green-400">PEEC SYSTEMS</h1>
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
          <div className="hidden md:flex space-x-8  ">
            <Link to="/" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition">Home</Link>
            <Link to="/services" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition">Services</Link>
            <Link to="/about" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition">About</Link>
            <Link to="/contact" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition">Contact</Link>
            <Link to="/blog" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition">Blog</Link>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition px-3 py-2">Home</Link>
              <Link to="/services" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition px-3 py-2">Services</Link>
              <Link to="/about" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition px-3 py-2">About</Link>
              <Link to="/contact" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition px-3 py-2">Contact</Link>
              <Link to="/blog" className="text-green-800 dark:text-green-400 hover:text-black dark:hover:text-white transition px-3 py-2">Blog</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
