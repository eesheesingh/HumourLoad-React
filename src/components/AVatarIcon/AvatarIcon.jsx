// AvatarIcon.js
import React, { useState } from 'react';
import { avatar } from '../../assets';

const AvatarIcon = () => {

  return (
    <a
      href="https://github.com/eesheesingh" // Add link to GitHub profile
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-4 w-14 h-14 z-50"
    >
      {/* Avatar Icon */}
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-gray-200 dark:border-gray-600 bg-[#EBE6E0]]/30 backdrop-blur-md">
        <img
          src={avatar}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </a>
  );
};

export default AvatarIcon;
