import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "CCTV Installation",
    description: "High-quality surveillance systems for your security needs.",
    icon: "🎥",
  },
  {
    title: "Automatic Gates",
    description: "Smart gate solutions with remote access control.",
    icon: "🚪",
  },
  {
    title: "Electric Fences",
    description: "Advanced perimeter security systems.",
    icon: "⚡",
  }
];

const ServicePreview = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold text-green-800 mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <Link
            to="/services"
            className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
          >
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicePreview; 