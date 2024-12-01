import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import ServicePreview from '../components/ServicePreview';
import Testimonials from '../components/Testimonials';

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '6744db9fe736fed81f23a449' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex-grow">
      <Hero />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-white"
      >
        <div className="w-full mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Our Featured Services
          </h2>
          <ServicePreview />
        </div>
      </motion.div>
      <Testimonials />
    </div>
  );
};

export default Home; 