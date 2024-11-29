import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Innovative CCTV Solutions for Security",
    date: "March 15, 2024",
    excerpt: "Learn how we enhanced security at Bemuga with advanced CCTV systems featuring motion detection and remote monitoring.",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1000",
    category: "CCTV Installations",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "POS Systems for Seamless Business Operations",
    date: "March 12, 2024",
    excerpt: "Discover how our POS installations at Mezonoir and Auras streamlined their transaction processes and improved efficiency.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000",
    category: "Point of Sale",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Integrated POS and CCTV Solutions for Businesses",
    date: "March 10, 2024",
    excerpt: "Stone Haven and Hickory are now benefiting from integrated POS and CCTV systems that ensure security and operational clarity.",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=1000",
    category: "Integrated Solutions",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "Building Security and Efficiency Across Uganda",
    date: "March 8, 2024",
    excerpt: "Explore how our expertise has supported businesses like Bemuga and Mezonoir in achieving unparalleled operational security.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000",
    category: "Market Influence",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Empowering Businesses with Technology",
    date: "March 5, 2024",
    excerpt: "See how Hickory and Auras have leveraged our state-of-the-art security and POS solutions to stay ahead in their industries.",
    image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?q=80&w=1000",
    category: "Technology Impact",
    readTime: "5 min read"
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'CCTV Installations',
    'Point of Sale',
    'Integrated Solutions',
    'Market Influence',
    'Technology Impact',
  ];

  return (
    <div className="mx-auto px-4 py-12 max-w-screen-full">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-800 dark:text-green-400 mb-4">
          PEEC SYSTEMS BLOG
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Showcasing our work across Uganda, where we deliver innovative CCTV, POS, and security solutions for businesses and organizations.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-transform
              ${selectedCategory === category
                ? 'bg-green-600 text-white scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-500 hover:text-white'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts
          .filter((post) => selectedCategory === 'All' || post.category === selectedCategory)
          .map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs uppercase font-semibold">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-green-600 dark:text-green-400 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-16 bg-green-50 dark:bg-gray-700 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get the latest updates on innovative CCTV, POS, and integrated security solutions.
        </p>
        <div className="flex justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded-r-lg hover:bg-green-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
