import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { loadingQuote } from '../../assets';

const categories = [
  'age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 'best', 
  'birthday', 'business', 'car', 'change', 'communication', 'computers', 'cool', 'courage', 
  'dad', 'dating', 'death', 'design', 'dreams', 'education', 'environmental', 'equality', 
  'experience', 'failure', 'faith', 'family', 'famous', 'fear', 'fitness', 'food', 'forgiveness', 
  'freedom', 'friendship', 'funny', 'future', 'god', 'good', 'government', 'graduation', 
  'great', 'happiness', 'health', 'history', 'home', 'hope', 'humor', 'imagination', 
  'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership', 'learning', 
  'legal', 'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money', 'morning', 
  'movies', 'success',
];

const Categories = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Lazy loading effect for categories
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#FBF0F4] text-[#91736B]">
        <img src={loadingQuote} alt="Loading..." className="w-20 rounded-full h-20" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-br from-[#FBF0F4] to-[#f7e4ec]">
      <h1 className="text-4xl font-bold mb-8 text-[#91736B]">Explore Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/quote-load/${category}`}
            className="relative p-4 bg-white border border-[#91736B] rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#f0d8d9] group"
          >
            <div className="absolute top-4 right-4 text-[#91736B] opacity-0 group-hover:opacity-100 transition duration-300">
              <FiChevronRight className="text-2xl" />
            </div>
            <h2 className="text-lg font-semibold text-[#91736B] text-center group-hover:text-[#75504F]">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <p className="text-center text-[#75504F] text-sm mt-2 opacity-70 group-hover:opacity-100 transition duration-300">
              {`Quotes about ${category}`}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
