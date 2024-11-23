import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './components/Hero';
import ServicePreview from './components/ServicePreview';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <section className="py-16 bg-white w-full">
                  <div className="container mx-auto px-4 w-full">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
                      Our Featured Services
                    </h2>
                    <ServicePreview />
                  </div>
                </section>
                <Testimonials />
                <section id="contact-section" className="py-16 bg-white w-full">
                  <div className="container mx-auto px-4 w-full">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
                      Schedule a Site Visit
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                      {/* Contact Form */}
                      <div className="bg-green-50 p-6 rounded-lg shadow-md">
                        <ContactForm />
                      </div>

                      {/* Map */}
                      <div className="bg-green-50 p-6 rounded-lg shadow-md">
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
                        <div className="mt-4 text-green-800">
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
              </>
            } />
            
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </main>

        {/* Emergency Contact Banner */}
        <div className="bg-green-700 text-white py-4 w-full">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg">
              Need immediate assistance? Call us 24/7:
              <a href="tel:+256757017760" className="font-bold ml-2 hover:text-green-200">
                +256 757 017 760
              </a>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App; 