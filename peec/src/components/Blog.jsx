import { useState } from 'react';

const companies = [
  {
    id: 1,
    name: "MTN Uganda",
    image: "/images/mtn.png",
    description: "Leading telecommunications company in Uganda, providing mobile and internet services."
  },
  {
    id: 2,
    name: "Uganda Breweries",
    image: "/images/ugandabreweries.jpg",
    description: "A major player in the beverage industry, known for its quality beers and spirits."
  },
  {
    id: 3,
    name: "Stanbic Bank",
    image: "/images/stanbic.jpg",
    description: "One of the largest banks in Uganda, offering a wide range of financial services."
  },
  {
    id: 4,
    name: "Uganda Airlines",
    image: "/images/uganda.png",
    description: "The national carrier of Uganda, providing domestic and international flights."
  },
  {
    id: 5,
    name: "NSSF Uganda",
    image: "/images/nssf.png",
    description: "The National Social Security Fund, providing social security services to Ugandans."
  },
  {
    id: 6,
    name: "DHL Uganda",
    image: "/images/dhl.jpg",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {companies.map((company) => (
          <div key={company.id} className="bg-green-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={company.image}
              alt={company.name}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
              style={{ height: '130px', width: '100%' }}
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-800 dark:text-green-400 mb-3 ">
                {company.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
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
