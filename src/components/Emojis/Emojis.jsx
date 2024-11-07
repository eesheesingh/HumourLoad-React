import React from 'react';
import { motion } from 'framer-motion';

const emojiVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const Emojis = () => {
  return (
    <div className="emoji-container">
      {/* Emojis with staggered appearance */}
      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] top-16 left-8 md:top-24 md:left-12 z-0"
        role="img"
        aria-label="laughing"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        😂
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] bottom-32 right-12 md:bottom-48 md:right-20 z-0"
        role="img"
        aria-label="laughing"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        😂
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] top-64 right-16 md:top-80 md:right-40 z-0"
        role="img"
        aria-label="dad"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        👨‍🦳
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] bottom-20 left-4 md:bottom-32 md:left-8 z-0"
        role="img"
        aria-label="laughing"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        😆
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] bottom-56 right-2 md:bottom-72 md:right-10 z-0"
        role="img"
        aria-label="smiling"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 0.5 }}
      >
        😊
      </motion.span>

      {/* Additional Emojis */}
      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] bottom-28 right-32 md:bottom-36 md:right-40 z-0"
        role="img"
        aria-label="crying laughing"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        🤣
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] top-[20rem] left-32 md:top-[25rem] md:left-36 z-0"
        role="img"
        aria-label="thumbs up"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        👍
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] bottom-[12rem] left-[20rem] md:bottom-[15rem] md:left-[25rem] z-0"
        role="img"
        aria-label="smirk"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        😏
      </motion.span>

      <motion.span
        className="absolute text-[2rem] sm:text-[2.5rem] md:text-[3rem] top-[35rem] left-[6rem] md:top-[38rem] md:left-[8rem] z-0"
        role="img"
        aria-label="wink"
        variants={emojiVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        😉
      </motion.span>
    </div>
  );
};

export default Emojis;
