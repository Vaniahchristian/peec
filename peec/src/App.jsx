import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './components/Blog';
import Hero from './components/Hero';
import ServicePreview from './components/ServicePreview';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import { motion } from 'framer-motion';

function App() {
  console.log("App component rendered");
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // Update document class and localStorage when theme changes
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <div className={`min-h-screen flex flex-col w-full overflow-x-hidden ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        {/* Main Content */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Hero theme={theme} />
                <motion.section 
                  className={`py-16 w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="container mx-auto px-4 w-full">
                    <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-green-400' : 'text-green-800'}`}>
                      Our Featured Services
                    </h2>
                    <ServicePreview />
                  </div>
                </motion.section>
                <Testimonials theme={theme} />


                <Blog theme={theme} />
                <section id="contact-section" className={`py-16 w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                  <div className="container mx-auto px-4 w-full">
                    <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-green-400' : 'text-green-800'}`}>
                      Schedule a Site Visit
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                      {/* Contact Form */}
                      <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}>
                        <ContactForm />
                      </div>

                      {/* Map */}
                      <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}>
                        <div className="w-full h-[400px] rounded-lg overflow-hidden">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.753876977032!2d32.60775937469281!3d0.3762141995829234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0932058e0f%3A0x7f22e7105a39e96c!2sG%26H%20Plaza%2C%20Bahai%20Rd%2C%20Kampala!5e0!3m2!1sen!2sug!4v1709913045385!5m2!1sen!2sug"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="PEEC Systems Location at G&H Plaza, Bahai Road"
                          ></iframe>
                        </div>
                        <div className={`mt-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-800'}`}>
                          <p className="font-semibold">Find us at:</p>
                          <p>G&H Plaza, Bahai Road</p>
                          <p>Near Star Petrol Station</p>
                          <p>Kampala, Uganda</p>
                          <p className="mt-2">
                            <a href="tel:+256757017760" className="hover:text-green-700">
                              +256 757 017 760
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            } />
            
            
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          
        </main>

        {/* Emergency Contact Banner */}
        <motion.div 
          className={`py-4 w-full ${theme === 'dark' ? 'bg-green-900' : 'bg-green-700'} text-white`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg">
              Need immediate assistance? Call us 24/7:
              <a href="tel:+256757017760" className="font-bold ml-2 hover:text-green-200">
                +256 757 017 760
              </a>
            </p>
          </div>
        </motion.div>

        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
}

export default App; 