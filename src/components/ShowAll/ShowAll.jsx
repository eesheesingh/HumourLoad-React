import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import { avatar, LaughEmoji, Quotes, DarkH, GridOne, GridTwo, GridThree, GridFour } from '../../assets';

const ShowAll = () => {
  return (
    <div className="grid md:h-screen lg:h-screen xl:h-screen p-5 rounded-2xl gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:grid-rows-4 text-gray-800">
      
      {/* Developer Bio Section */}
      <div className="rounded-2xl col-span-1 lg:col-span-3 shadow-lg row-span-1 lg:row-span-2 px-8 py-6 text-gray-800 flex flex-col justify-between border-2 border-[#000] border-dashed transform transition-transform duration-300 hover:-translate-y-2 group hover:border-double">
        <div className="relative w-full h-auto mb-4 overflow-hidden">
          <img src={GridOne} alt="Developer" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EBE6E0] to-transparent" />
        </div>
        <div className="flex flex-col mt-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <img src={avatar} alt="Developer" className="w-10 h-10 rounded-full bg-[#fff] object-cover" />
              <h1 className="text-2xl lg:text-3xl font-semibold">About Me</h1>
            </div>
            {/* <div className="border border-[#000] rounded-full p-2 transform transition-transform duration-300 group-hover:-rotate-45">
              <FiArrowRight className="text-xl text-[#000]" />
            </div> */}
          </div>
          <p className="text-gray-600 text-sm lg:text-base">
            A passionate developer with a love for crafting beautiful, functional, and user-friendly applications. Experienced in front-end technologies and always eager to learn and innovate.
          </p>
        </div>
      </div>

      {/* DarkHum Load Section */}
      <Link to="/dark-humour-load" className="rounded-2xl col-span-1 lg:col-span-2 shadow-lg row-span-1 lg:row-span-2 px-8 py-6 text-[#000] flex flex-col justify-between border-2 border-[#000] border-dashed transform transition-transform duration-300 hover:-translate-y-2 group hover:border-double">
        <div className="relative w-full h-auto mb-4 overflow-hidden">
          <img src={GridFour} alt="DarkHum" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EBE6E0] to-transparent" />
        </div>
        <div className="flex flex-col mt-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <img src={DarkH} alt="DarkHum" className="w-10 h-10 rounded-full bg-[#0000007b] object-cover" />
              <h1 className="text-2xl lg:text-3xl font-semibold">DarkHum Load</h1>
            </div>
            <div className="border border-[#000] rounded-full p-2 transform transition-transform duration-300 group-hover:-rotate-45">
              <FiArrowRight className="text-xl text-[#000]" />
            </div>
          </div>
          <p className="text-gray-300 text-sm lg:text-base">
            Dive into dark humor with a twist—only for those who dare!
          </p>
        </div>
      </Link>

      {/* Quotes Load Section */}
      <Link to="/quotes-load" className="rounded-2xl col-span-1 lg:col-span-2 shadow-lg row-span-1 lg:row-span-2 px-8 py-6 text-gray-900 flex flex-col justify-between border-2 border-[#000] border-dashed transform transition-transform duration-300 hover:-translate-y-2 group hover:border-double">
        <div className="relative w-full h-auto mb-4 overflow-hidden">
          <img src={GridThree} alt="Quotes" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EBE6E0] to-transparent" />
        </div>
        <div className="flex flex-col mt-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <img src={Quotes} alt="Quotes" className="w-10 h-10 rounded-full bg-[#fff] object-cover" />
              <h1 className="text-2xl lg:text-3xl font-semibold">Quotes Load</h1>
            </div>
            <div className="border border-[#000] rounded-full p-2 transform transition-transform duration-300 group-hover:-rotate-45">
              <FiArrowRight className="text-xl text-[#000]" />
            </div>
          </div>
          <p className="text-gray-700 text-sm lg:text-base">
            Motivational and inspirational quotes to fuel your journey.
          </p>
        </div>
      </Link>

      {/* Humour Load Section */}
      <Link to="/" className="rounded-2xl col-span-1 lg:col-span-3 shadow-lg row-span-1 lg:row-span-2 px-8 py-8 flex flex-col justify-between border-2 border-[#000] border-dashed transform transition-transform duration-300 hover:-translate-y-2 group hover:border-double">
        <div className="relative w-full h-auto mb-4 overflow-hidden">
          <img src={GridTwo} alt="Humour" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EBE6E0] to-transparent" />
        </div>
        <div className="flex flex-col mt-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <img src={LaughEmoji} alt="Humour" className="w-10 h-10 rounded-full object-cover" />
              <h1 className="text-[#000] text-2xl lg:text-3xl font-bold">Humour Load</h1>
            </div>
            <div className="border border-[#000] rounded-full p-2 transform transition-transform duration-300 group-hover:-rotate-45">
              <FiArrowRight className="text-xl text-[#000]" />
            </div>
          </div>
          <p className="text-[#000] text-sm lg:text-lg">
            Proven to increase developer productivity and add a dose of fun to your day.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ShowAll;
