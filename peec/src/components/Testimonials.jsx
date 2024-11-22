import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Kristin Smith",
    text: "I cannot begin to express my thanks and gratitude for the great result. I felt safe and understood. The professionalism, care, and consideration for my needs has been superb.",
    role: "Homeowner"
  },
  {
    name: "Sean Murphy",
    text: "I was extremely happy with the way my case was handled and the result achieved. Throughout the process everyone at PEEC Systems was professional, polite, and friendly.",
    role: "Business Owner"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          What Our Clients Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <svg className="h-8 w-8 text-green-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                </div>
                <div>
                  <p className="font-bold text-green-800">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
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