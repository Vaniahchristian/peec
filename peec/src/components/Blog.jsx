import { useState } from 'react';

const companies = [
  {
    id: 1,
    name: "MTN Uganda",
    image: "/images/mtn-removebg-preview.png",
    description: "Leading telecommunications company in Uganda, providing mobile and internet services."
  },
  {
    id: 2,
    name: "Uganda Breweries",
    image: "/images/ugandabreweries-removebg-preview.png",
    description: "A major player in the beverage industry, known for its quality beers and spirits."
  },
  {
    id: 3,
    name: "Stanbic Bank",
    image: "/images/stanbic-removebg-preview.png",
    description: "One of the largest banks in Uganda, offering a wide range of financial services."
  },
  {
    id: 4,
    name: "Uganda Airlines",
    image: "/images/uganda-removebg-preview.png",
    description: "The national carrier of Uganda, providing domestic and international flights."
  },
  {
    id: 5,
    name: "NSSF Uganda",
    image: "/images/nssf-removebg-preview.png",
    description: "The National Social Security Fund, providing social security services to Ugandans."
  },
  {
    id: 6,
    name: "DHL Uganda",
    image: "/images/dhl-removebg-preview.png",
    description: "Global leader in the logistics industry, providing international shipping and courier services."
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="mx-auto px-4 py-12 max-w-screen-full">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-800 dark:text-green-400 mb-4">
          Companies We've Worked With
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We take pride in our partnerships with leading companies across Uganda, delivering innovative solutions.
        </p>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="relative bg-green-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <h2 className="text-white text-lg font-bold">{company.name}</h2>
              </div>
            </div>

            {/* Text Section */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3">
                {company.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {company.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
