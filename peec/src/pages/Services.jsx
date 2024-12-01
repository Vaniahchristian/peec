import { motion } from 'framer-motion';

const services = [
  {
    title: "Point of Sale Systems",
    description: "Complete POS solutions for restaurants and supermarkets. Our systems streamline operations, improve customer service, and provide detailed business insights.",
    icon: "🏪",
    features: [
      "Restaurant Management System",
      "Supermarket Inventory Control",
      "Real-time Sales Tracking",
      "Customer Loyalty Programs",
      "Cloud-based Reporting",
      "Staff Management"
    ]
  },
  {
    title: "Restaurant POS",
    description: "Specialized POS systems for restaurants, cafes, and food service businesses. Includes table management, kitchen display systems, and mobile ordering.",
    icon: "🍽️",
    features: [
      "Table Management",
      "Kitchen Display System",
      "Mobile Ordering",
      "Menu Management",
      "Reservation System",
      "Payment Processing"
    ]
  },
  {
    title: "Supermarket POS",
    description: "Comprehensive retail management systems for supermarkets and retail stores. Features include inventory management, barcode scanning, and supplier management.",
    icon: "🛒",
    features: [
      "Inventory Management",
      "Barcode Scanning",
      "Supplier Management",
      "Multi-branch Support",
      "Price Management",
      "Sales Analytics"
    ]
  },
  {
    title: "CCTV Installation",
    description: "We supply, provide and install a wide range of high quality, high visibility and covert cameras for home or commercial properties. Available in Bullet, Dome, Box, Spy, and Miniature Cameras.",
    icon: "🎥",
    features: [
      "24/7 Monitoring",
      "High Resolution Cameras",
      "Remote Viewing",
      "Motion Detection",
      "Integration with POS",
      "Loss Prevention"
    ]
  },
  {
    title: "Automatic Gate & Intercom",
    description: "Wide range of automatic gate solutions for both slide and swing gates with GSM mobile operations and bluetooth compatibility. Includes intercom system integration.",
    icon: "🚪",
    features: [
      "Mobile Control",
      "Intercom Integration",
      "Remote Access",
      "Safety Sensors",
      "Access Control",
      "Maintenance Support"
    ]
  },
  {
    title: "IT Support & Maintenance",
    description: "Comprehensive IT support and maintenance services for businesses. We ensure your systems run smoothly and efficiently.",
    icon: "💻",
    features: [
      "24/7 Technical Support",
      "System Updates",
      "Network Management",
      "Data Backup",
      "Security Monitoring",
      "Staff Training"
    ]
  },
  {
    title: "Electric Fences",
    description: "Advanced electric fencing solutions for residential and commercial properties. Our systems provide enhanced security and peace of mind.",
    icon: "⚡",
    features: [
      "Perimeter Security",
      "Remote Monitoring",
      "Customizable Solutions",
      "Integration with Alarm Systems",
      "24/7 Support"
    ]
  },
  {
    title: "Fuel Monitoring Systems",
    description: "Comprehensive fuel monitoring solutions to track fuel usage and prevent theft. Ideal for businesses with fleet operations.",
    icon: "⛽",
    features: [
      "Real-time Fuel Tracking",
      "Alerts for Unusual Activity",
      "Data Analytics",
      "Integration with Fleet Management",
      "Custom Reports"
    ]
  },
  {
    title: "Car Tracking Systems",
    description: "State-of-the-art GPS tracking systems for vehicles. Ensure the safety and security of your fleet with real-time tracking.",
    icon: "🚗",
    features: [
      "Real-time Location Tracking",
      "Geofencing Alerts",
      "Route Optimization",
      "Driver Behavior Monitoring",
      "24/7 Support"
    ]
  }
];

const Services = () => {
  return (
    <div className="bg-white dark:bg-gray-900 flex-grow w-full">
      <div className="w-full px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-green-800 dark:text-green-400 mb-12">Our Services</h1>
          
          {/* Featured Service */}
          {/* <div className="mb-16">
            <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-4">
                Complete POS Solutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Transform your business with our state-of-the-art Point of Sale systems, 
                specifically designed for restaurants and supermarkets. Get everything you 
                need to streamline operations and boost your business growth.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">For Restaurants</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">✓ Table Management</li>
                    <li className="flex items-center">✓ Kitchen Display Systems</li>
                    <li className="flex items-center">✓ Mobile Ordering</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">For Supermarkets</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">✓ Inventory Control</li>
                    <li className="flex items-center">✓ Barcode Integration</li>
                    <li className="flex items-center">✓ Multi-branch Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          */}

          {/* All Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-green-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 