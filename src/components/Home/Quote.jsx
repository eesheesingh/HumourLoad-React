import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiCopy, FiCheck, FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import QuotesEmojis from '../Emojis/QuotesEmojis';
import { QuoteAvtar } from '../../assets';

const Quote = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [quoteData, setQuoteData] = useState({
    quote: `Fetching quotes about ${category}...`,
    author: '',
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setShowTypewriter(false);

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          method: 'GET',
          headers: { 'X-Api-Key': '0ORL7fVj+calEq6pEWFKWQ==pru7e3tPEzvcBKVF' },
          contentType: 'application/json',
        }
      );
      const data = await response.json();
      if (data.length > 0) {
        setQuoteData({ quote: data[0].quote, author: data[0].author });
        setShowTypewriter(true);
      } else {
        setQuoteData({
          quote: `No quotes found for ${category}. Try another category.`,
          author: '',
        });
      }
    } catch (error) {
      setQuoteData({
        quote: 'Could not fetch quote. Please try again later.',
        author: '',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [category]);

  const handleCopy = () => {
    const textToCopy = `${quoteData.quote} - ${quoteData.author}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#FBF0F4] to-[#f7e4ec] text-[#91736B] relative">
      <QuotesEmojis />

      <motion.div
        className="relative bg-white mx-3 p-10 md:p-16 shadow-2xl rounded-3xl w-full max-w-3xl text-center border-2 border-[#91736B] border-dashed z-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate('/quotes-load')}
          className="absolute top-4 left-4 text-[#91736B] bg-[#FBF0F4] p-3 rounded-full shadow-md hover:bg-[#f0d8d9] focus:outline-none"
        >
          <FiArrowLeft className="text-2xl" />
        </button>

        {/* Quote Avatar */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden shadow-lg border-2 border-[#91736B]">
          <img src={QuoteAvtar} alt="Quote Avatar" className="w-full h-full object-cover" />
        </div>

        {/* Decorative Quotes */}
        <div className="absolute top-25 left-8 text-7xl font-serif text-[#F0E3E6] opacity-60 select-none">
          “
        </div>
        <div className="absolute bottom-8 right-8 text-7xl font-serif text-[#F0E3E6] opacity-60 select-none">
          ”
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#91736B] mt-12">
          {category.charAt(0).toUpperCase() + category.slice(1)} Quotes
        </h1>

        <div className="relative mb-6 text-lg md:text-xl italic font-light leading-relaxed text-[#75504F]">
          {loading ? (
            'Loading Quote...'
          ) : showTypewriter ? (
            <Typewriter
              options={{ autoStart: true, loop: false, delay: 50 }}
              onInit={(typewriter) => {
                typewriter.typeString(quoteData.quote).start();
              }}
            />
          ) : (
            quoteData.quote
          )}
        </div>

        {quoteData.author && (
          <p className="mb-6 text-md md:text-lg font-medium text-[#91736B]">- {quoteData.author}</p>
        )}

        <button
          onClick={fetchQuote}
          className="px-6 py-2 bg-[#91736B] text-white rounded-full font-medium transition duration-300 transform hover:scale-105"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Another Quote'}
        </button>

        {quoteData.quote && (
          <div
            onClick={handleCopy}
            className="absolute top-4 right-4 flex items-center space-x-1 cursor-pointer hover:bg-[#FBF0F4] p-2 rounded-lg"
          >
            {copied ? (
              <>
                <FiCheck className="text-green-500 text-xl" />
                <span className="text-xs font-semibold text-green-600">Copied</span>
              </>
            ) : (
              <FiCopy className="text-[#91736B] text-xl hover:text-[#75504F]" />
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Quote;
