// BestQuotesBanner.js
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Quotes } from '../../assets';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BestQuotesBanner = () => {
  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center text-center bg-[#277a59] text-[#EBE6E0] py-8 px-4 md:py-10 md:px-6 rounded-lg shadow-lg max-w-sm sm:max-w-md md:max-w-3xl mx-auto mt-8 z-10"
      initial={{ rotate: 10 }}
      animate={{ rotate: 3 }}
    >
      {/* Quotes Image in Top-Right Corner with slight rotation */}
      <img
        src={Quotes}
        alt="Quotes"
        className="absolute top-4 right-4 w-10 h-10 md:w-16 md:h-16 opacity-80"
      />

      <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Need Motivation?</h1>
      <p className="text-base md:text-lg mb-4 md:mb-6">Read some good quotes to cheer yourself up.</p>
      
      <Link 
        to="/quotes-load" 
        className="flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#EBE6E0] text-[#277a59] font-semibold rounded-full transition-transform duration-200 hover:scale-105 focus:outline-none"
      >
        Check Out <FiArrowRight className="ml-2" />
      </Link>
    </motion.div>
  );
};

export default BestQuotesBanner;
