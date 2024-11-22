import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-50 shadow-lg w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-green-800">PEEC SYSTEMS</h1>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-800">
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
            <Link to="/" className="text-green-800 hover:text-black transition">Home</Link>
            <Link to="/services" className="text-green-800 hover:text-black transition">Services</Link>
            <Link to="/about" className="text-green-800 hover:text-black transition">About</Link>
            <Link to="/contact" className="text-green-800 hover:text-black transition">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-green-800 hover:text-black transition px-3 py-2">Home</Link>
              <Link to="/services" className="text-green-800 hover:text-black transition px-3 py-2">Services</Link>
              <Link to="/about" className="text-green-800 hover:text-black transition px-3 py-2">About</Link>
              <Link to="/contact" className="text-green-800 hover:text-black transition px-3 py-2">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 