import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi'; // Import a close icon

const ReactionPopup = ({ message, closePopup }) => {
  useEffect(() => {
    // Automatically hide the popup after 3 seconds
    const timer = setTimeout(() => {
      closePopup(); // Call the close function after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [closePopup]);

  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-[#f2f2f2] text-black p-4 rounded-lg shadow-lg border border-gray-300 text-center w-72 z-50">
        <button onClick={closePopup} className="text-gray-500 top-0 hover:text-gray-700 focus:outline-none">
          <FiX className="text-xl" /> {/* Close icon */}
        </button>
      <div className="flex justify-between items-center">
        <p className="font-semibold">{message}</p>
      </div>
    </div>
  );
};

export default ReactionPopup;
