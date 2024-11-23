import { motion } from 'framer-motion';

const Hero = ({ theme }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative py-20 md:py-32 transition-colors duration-200 w-screen overflow-hidden`}>
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-200 ${
          theme === 'dark' ? 'opacity-10' : 'opacity-20'
        }`}
        style={{ 
          backgroundImage: `url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop")`
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className={`text-4xl font-bold sm:text-5xl md:text-6xl mb-4 transition-colors duration-200`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your Number One Security and
            <motion.span 
              className={`block mt-2 transition-colors duration-200 ${
                theme === 'dark' ? 'text-green-400' : 'text-green-800'
              }`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I.T Solutions Center
            </motion.span>
          </motion.h1>
          <p className={`mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl transition-colors duration-200 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional security solutions for homes and businesses with over 20 years of experience
          </p>
          <motion.div 
            className="mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={scrollToContact}
              className="group relative overflow-hidden px-8 py-3 rounded-md bg-green-600 text-white font-medium transition-all duration-300 hover:bg-green-700"
            >
              <span className="relative z-10">Schedule a Site Visit</span>
              <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 