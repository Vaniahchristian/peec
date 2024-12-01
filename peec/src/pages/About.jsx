import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-green-50 dark:from-gray-800 dark:to-gray-900 py-16">
      <div className=" mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <h1 className="text-4xl font-extrabold text-center text-green-800 dark:text-green-400 mb-12">
            About PEEC Systems
          </h1>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Section */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Located on G&H Plaza Kisaasi Bahai Road, PEEC Systems Ltd has established itself as a leading provider of security and IT solutions. With over 20 years of experience, we've built a reputation for excellence and reliability.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our team includes certified engineers with over 7 years of experience in the field, working with various organizations to deliver top-tier security solutions.
              </p>

              
              <div className="bg-green-50 dark:bg-gray-800 p-10 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3">Our Values</h3>
                <ul className="space-y-2">
                  {["Professional Excellence", "Customer Satisfaction", "Innovation"].map((value, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg
                        className="w-6 h-6 mr-2 text-green-600 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3">Business Hours</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Monday - Thursday: 8am - 8pm</li>
                  <li>Saturday: 8am - 8pm</li>
                  <li>Lunch: 1pm - 2pm</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  G&H Plaza<br />
                  Kisaasi Bahai Road<br />
                  Near Star Petrol Station
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 dark:text-green-400 underline hover:text-green-800"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
