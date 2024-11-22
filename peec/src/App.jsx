import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
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
                <section className="py-16 bg-white w-full">
                  <div className="container mx-auto px-4 w-full">
                    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
                      Schedule a Site Visit
                    </h2>
                    <div className="max-w-2xl mx-auto">
                      <ContactForm />
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
    </Router>
  );
}

export default App; 