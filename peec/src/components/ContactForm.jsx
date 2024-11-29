import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 ">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                     shadow-sm focus:border-green-500 focus:ring-green-500 
                     dark:bg-gray-700 dark:text-white  p-3"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                     shadow-sm focus:border-green-500 focus:ring-green-500 
                     dark:bg-gray-700 dark:text-white p-3"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                     shadow-sm focus:border-green-500 focus:ring-green-500 
                     dark:bg-gray-700 dark:text-white p-3"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 
                     shadow-sm focus:border-green-500 focus:ring-green-500 
                     dark:bg-gray-700 dark:text-white"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md 
                   hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 
                   transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 