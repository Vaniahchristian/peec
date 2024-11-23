import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 dark:bg-gray-900 text-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white dark:text-green-400">PEEC SYSTEMS LTD</h3>
            <p className="text-green-100 dark:text-gray-300">
              Your number one Security and I.T Solutions Center
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white dark:text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 dark:text-gray-300 hover:text-white dark:hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-green-100 dark:text-gray-300 hover:text-white dark:hover:text-white transition">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 dark:text-gray-300 hover:text-white dark:hover:text-white transition">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 dark:text-gray-300 hover:text-white dark:hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white dark:text-green-400">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-green-100 dark:text-gray-300">CCTV Installation</li>
              <li className="text-green-100 dark:text-gray-300">Automatic Gate Solutions</li>
              <li className="text-green-100 dark:text-gray-300">Electric Fences</li>
              <li className="text-green-100 dark:text-gray-300">Security Systems</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white dark:text-green-400">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-green-100 dark:text-gray-300">G&H Plaza, Kisaasi Bahai Road</p>
              <p className="text-green-100 dark:text-gray-300">+256 757 017 760</p>
              <p className="text-green-100 dark:text-gray-300">+256 788 420 335</p>
              <p className="text-green-100 dark:text-gray-300">peecsystemsltd@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-green-100 dark:text-gray-300">&copy; {new Date().getFullYear()} PEEC Systems Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 