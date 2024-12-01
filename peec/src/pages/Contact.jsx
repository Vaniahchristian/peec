import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';

export const Contact = () => {
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
    <div className="bg-white dark:bg-gray-900 flex-grow w-screen mx-auto px-4">
      <div className="px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-green-800 dark:text-green-400 mb-12">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +256 757 017 760 / +256 788 420 335
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    peecsystemsltd@gmail.com
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    G&H Plaza, Kisaasi Bahai Road
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Monday - Thursday: 8am - 8pm</li>
                  <li>Saturday: 8am - 8pm</li>
                  <li>Lunch: 1pm - 2pm</li>
                </ul>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 
