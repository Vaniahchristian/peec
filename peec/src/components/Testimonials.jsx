import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Kristin Smith",
    text: "I cannot begin to express my thanks and gratitude for the great result. I felt safe and understood. The professionalism, care, and consideration for my needs has been superb.",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Sean Murphy",
    text: "I was extremely happy with the way my case was handled and the result achieved. Throughout the process everyone at PEEC Systems was professional, polite, and friendly.",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Maria Rodriguez",
    text: "The team at PEEC Systems went above and beyond to ensure our security needs were met. Their attention to detail and expert knowledge made us feel completely secure.",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = ({ theme }) => {
  return (
    <section className={`py-16 transition-colors duration-200 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-green-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 transition-colors duration-200 ${
          theme === 'dark' ? 'text-green-400' : 'text-green-800'
        }`}>
          What Our Clients Say
        </h2>
        
        <p className={`text-center mb-12 max-w-2xl mx-auto transition-colors duration-200 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Don't just take our word for it. Here's what our valued clients have to say about their experience with PEEC Systems.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-lg shadow-md transition-all duration-200 ${
                theme === 'dark' 
                  ? 'bg-gray-800 shadow-gray-900/50 hover:shadow-lg hover:shadow-gray-900/50' 
                  : 'bg-white shadow-gray-200 hover:shadow-lg hover:shadow-gray-300/50'
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 transition-colors duration-200 ${
                          theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <svg 
                    className={`h-8 w-8 mb-4 transition-colors duration-200 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className={`italic mb-4 transition-colors duration-200 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/48';
                      }}
                    />
                  </div>
                  <div>
                    <p className={`font-bold transition-colors duration-200 ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-800'
                    }`}>
                      {testimonial.name}
                    </p>
                    <p className={`transition-colors duration-200 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 