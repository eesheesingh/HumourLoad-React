// About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiGithub, FiSmile } from 'react-icons/fi';
import { HappyAvatar } from '../../assets';

const About = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.5, 1] }}
      className="flex justify-center items-center min-h-screen bg-[#EBE6E0] p-10"
    >
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-dashed border-[#277a59] text-gray-800">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#277a59] mb-4">About the Project</h1>
          <p className="text-gray-700 text-lg">
            Welcome to <span className="font-semibold">Humour Load</span>, your ultimate destination for a dose of laughter and inspiration.
            This project combines humor and motivation, bringing you curated jokes and quotes to brighten your day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Key Features Section */}
          <div className="p-6 rounded-lg bg-[#f9f9f9] border border-[#277a59] shadow-md">
            <h2 className="text-2xl font-semibold text-[#277a59] mb-3 flex items-center space-x-2">
              <FiSmile className="text-2xl text-[#277a59]" />
              <span>Key Features</span>
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>🔸 Curated Dad Jokes</li>
              <li>🔸 Inspiring Quotes</li>
              <li>🔸 Dark Humor Collection</li>
              <li>🔸 Interactive Reactions</li>
              <li>🔸 Easy Sharing & Copy Options</li>
            </ul>
          </div>

          {/* Technology Stack Section */}
          <div className="p-6 rounded-lg bg-[#f9f9f9] border border-[#277a59] shadow-md">
            <h2 className="text-2xl font-semibold text-[#277a59] mb-3 flex items-center space-x-2">
              <FiGithub className="text-2xl text-[#277a59]" />
              <span>Tech Stack</span>
            </h2>
            <p className="text-gray-700">
              Built using <span className="font-semibold">React.js</span>, <span className="font-semibold">Framer Motion</span> <span className="font-semibold">TypeScript</span>. The styling maintains a modern, light theme with a dash
              of green to keep things fresh and enjoyable.
            </p>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-[#277a59] mb-4 flex items-center justify-center space-x-2">
            <img src={HappyAvatar} alt="Laugh Emoji" className="w-8 h-8 rounded-full" />
            <span>Get in Touch</span>
          </h2>
          <p className="text-gray-700 mb-6">
            We’d love to hear your thoughts! If you’d like to contribute, have feedback, or just want to say hi, drop us a line.
          </p>
          <div className="flex justify-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#277a59] cursor-pointer hover:text-[#1f5e46] transition duration-200"
              onClick={() => navigate('/contact')}
            >
              <FiMail className="text-3xl" />
            </motion.div>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/eesheesingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#277a59] hover:text-[#1f5e46] transition duration-200"
            >
              <FiGithub className="text-3xl" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
