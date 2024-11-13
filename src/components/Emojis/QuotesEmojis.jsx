// QuotesEmojis.js
import React from 'react';
import { motion } from 'framer-motion';

const emojiVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const QuotesEmojis = () => {
  return (
    <div className="emoji-container">
      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] top-16 left-8 md:top-24 md:left-12 z-0"
        role="img"
        aria-label="sparkles"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        ✨
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] bottom-32 right-12 md:bottom-48 md:right-20 z-0"
        role="img"
        aria-label="star"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        🌟
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] top-64 right-16 md:top-80 md:right-40 z-0"
        role="img"
        aria-label="heart"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        ❤️
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] bottom-20 left-4 md:bottom-32 md:left-8 z-0"
        role="img"
        aria-label="thumbs up"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        👍
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] bottom-56 right-2 md:bottom-72 md:right-10 z-0"
        role="img"
        aria-label="fire"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 0.5 }}
      >
        🔥
      </motion.span>
    </div>
  );
};

export default QuotesEmojis;
