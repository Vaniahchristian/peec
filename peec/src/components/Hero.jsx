import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-green-50 py-20">
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31')] bg-cover bg-center bg-no-repeat opacity-10"
        style={{ 
          backgroundImage: `url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop")`
        }}
      ></div>
      
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl">
            Your Number One Security and
            <span className="text-green-800"> I.T Solutions Center</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Professional security solutions for homes and businesses with over 20 years of experience
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button
                onClick={scrollToContact}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition md:py-4 md:text-lg md:px-10"
              >
                Schedule a Site Visit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 