import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white flex-grow">
      <div className="max-w-full mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-green-800 mb-12">About PEEC Systems</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">
                Located on G&H Plaza Kisaasi Bahai Road, PEEC Systems Ltd has established itself as a leading provider of security and IT solutions. With over 20 years of experience, we've built a reputation for excellence and reliability.
              </p>
              <p className="text-gray-600 text-lg">
                Our team includes certified engineers with over 7 years of experience in the field, working with various organizations to deliver top-tier security solutions.
              </p>
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 mb-3">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Professional Excellence
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Customer Satisfaction
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Innovation
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 mb-3">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Thursday: 8am - 8pm</li>
                  <li>Saturday: 8am - 8pm</li>
                  <li>Lunch: 1pm - 2pm</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 mb-3">Location</h3>
                <p className="text-gray-600">
                  G&H Plaza<br />
                  Kisaasi Bahai Road<br />
                  Near Star Petrol Station
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 