import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "CCTV Installation",
    description: "High-quality surveillance systems for your security needs.",
    image: "/images/cctv (1).png",
  },
  {
    title: "Automatic Gates",
    description: "Smart gate solutions with remote access control.",
    image: "/images/automatic-gate.png",
  },
  {
    title: "Electric Fences",
    description: "Advanced perimeter security systems.",
    image: "/images/electric-fence.png",
  },
];

const ServicePreview = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: index * 0.2 }}
          className="bg-green-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
        >
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-14 object-contain mb-4"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {service.description}
          </p>
          <Link
            to="/services"
            className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium inline-flex items-center"
          >
            Learn More
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicePreview;
