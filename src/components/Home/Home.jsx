import React, { useState, useEffect } from 'react';
import { fetchJoke } from '../JokeButton/JokeService.js';
import { FiCopy, FiCheck, FiSmile } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';
import { OldAvatar, LaughAVatar, ThinkAvatar } from '../../assets/index.js';
import ReactionPopup from '../ReactionPopup/ReactionPopup.jsx';
import { motion } from 'framer-motion';
import BestQuotesBanner from '../Banners/BestQuotes.jsx';
import { Oval } from 'react-loader-spinner'; // Import spinner

const Home = () => {
  const [joke, setJoke] = useState('Start Your Day With a Good Dad Joke');
  const [loading, setLoading] = useState(false);
  const [copyIconVisible, setCopyIconVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [avatar, setAvatar] = useState(OldAvatar);
  const [showReactions, setShowReactions] = useState(false); 
  const [reactionMessage, setReactionMessage] = useState(''); 
  const [reactionButtonVisible, setReactionButtonVisible] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true); // State for the initial loading screen

  useEffect(() => {
    // Simulate a loading time for the initial load
    const timer = setTimeout(() => setLoadingScreen(false), 2000); // 2-second delay

    return () => clearTimeout(timer);
  }, []);

  const handleGetJoke = async () => {
    setLoading(true);
    setAvatar(ThinkAvatar);
    setShowReactions(false);
    const newJoke = await fetchJoke();
    if (newJoke) {
      setJoke(newJoke);
      setCopyIconVisible(true);
      setCopied(false);
      setShowTypewriter(true);
      setReactionButtonVisible(true);
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(joke);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  const toggleReactions = () => {
    setShowReactions((prev) => !prev);
  };

  const handleReactionClick = (reaction) => {
    let message = '';
    if (reaction === 'love') {
      message = 'Awww!! Thanks Bruh, But I am Taken';
    } else if (reaction === 'funny') {
      message = 'Well! I Know right, I too lost my kidney when I laughed';
    } else if (reaction === 'dislike') {
      message = 'WHOMP WHOMP! You need to work on your Humour!';
    }
    setReactionMessage(message);
    setShowReactions(false);
  };

  const closePopup = () => setReactionMessage('');

  // Show the loading spinner if loadingScreen is true
  if (loadingScreen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#EBE6E0]">
        <Oval
          height={80}
          width={80}
          color="#277a59"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#f3f3f3"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-transparent relative">
      <motion.div 
        className="bg-white mx-3 p-16 shadow-2xl rounded-lg w-full max-w-5xl text-center border-2 border-[#277a5975] border-dashed z-10 relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        
        <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 w-20 h-20 z-20 border border-[#277a59bb] rounded-full shadow-md">
          <img src={avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
        </div>
        
        {copyIconVisible && (
          <div className="absolute top-4 right-4 flex items-center space-x-1 cursor-pointer hover:bg-[#f2f2f2] p-2 rounded-lg" onClick={handleCopy}>
            {copied ? (
              <>
                <FiCheck className="text-green-500 text-xl" />
                <span className="text-xs font-semibold text-green-600">Copied</span>
              </>
            ) : (
              <FiCopy className="text-gray-500 text-xl hover:text-gray-700" />
            )}
          </div>
        )}

        <h1 className="md:text-[3rem] text-[2rem] font-bold mb-8 heading-font" style={{ color: '#277a59' }}>
          {loading ? (
            'Humour Loading...'
          ) : showTypewriter ? (
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 50,
                deleteSpeed: 20,
              }}
              onInit={(typewriter) => {
                setAvatar(ThinkAvatar);
                typewriter
                  .typeString(joke)
                  .callFunction(() => {
                    setShowTypewriter(false);
                    setAvatar(LaughAVatar);
                  })
                  .start();
              }}
            />
          ) : (
            joke
          )}
        </h1>
        
        <button
          onClick={handleGetJoke}
          className="px-8 py-3 bg-[#277a59] text-white rounded-full font-semibold text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#277a59]/50"
          disabled={loading}
        >
          {loading ? (
            <div className="loader mx-auto"></div>
          ) : (
            'Get a Joke'
          )}
        </button>

        {reactionButtonVisible && (
          <button
            onClick={toggleReactions}
            className="absolute bottom-4 left-4 text-[#277a59] bg-[#f2f2f2] p-2 rounded-full shadow-md hover:bg-[#e0e0e0] focus:outline-none"
          >
            <FiSmile className="text-2xl" />
          </button>
        )}

        {showReactions && (
          <motion.div
            className="absolute bottom-16 left-4 bg-white p-4 rounded-lg shadow-lg flex space-x-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative group" onClick={() => handleReactionClick('love')}>
              <span className="text-3xl cursor-pointer hover:scale-110 transition-transform">❤️</span>
              <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 text-xs bg-black text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100">Love it</span>
            </div>
            <div className="relative group" onClick={() => handleReactionClick('funny')}>
              <span className="text-3xl cursor-pointer hover:scale-110 transition-transform">😆</span>
              <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 text-xs bg-black text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100">Funny</span>
            </div>
            <div className="relative group" onClick={() => handleReactionClick('dislike')}>
              <span className="text-3xl cursor-pointer hover:scale-110 transition-transform">👎</span>
              <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 text-xs bg-black text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100">Dislike</span>
            </div>
          </motion.div>
        )}

        {reactionMessage && <ReactionPopup message={reactionMessage} closePopup={closePopup} />}
      </motion.div>

    </div>
    <div>
      
    </div>
      <BestQuotesBanner />
    </>
  );
};

export default Home;
