import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronRight, FiX, FiMenu } from 'react-icons/fi';
import { LaughEmoji } from '../../assets';

const Navbar = ({ title }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Define the dropdown options based on the current path
  const dropdownOptions = {
    '/': [
      { path: '/quotes-load', label: 'Quotes Load' },
      { path: '/dark-humour-load', label: 'DarkHum Load' },
    ],
    '/quotes-load': [
      { path: '/', label: 'Humour Load' },
      { path: '/dark-humour-load', label: 'DarkHum Load' },
    ],
    '/dark-humour-load': [
      { path: '/', label: 'Humour Load' },
      { path: '/quotes-load', label: 'Quotes Load' },
    ],
  };

  const menuItems = dropdownOptions[location.pathname] || dropdownOptions['/'];

  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#EBE6E0]
        ${isScrolled ? 'bg-[#EBE6E0]/80 backdrop-blur-md shadow-lg' : 'bg-[#EBE6E0] border-b-2 border-[#277a598a]'}`}
    >
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <button onClick={handleMenuToggle} className="btn btn-ghost btn-circle text-[#277a59]">
            {menuOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
          {menuOpen && (
            <ul className="menu menu-sm dropdown-content bg-white/30 border border-[#277a5992] text-[#277a59] backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
              <li><Link to="/show-all">Show All</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center relative group">
        <div className="btn btn-ghost normal-case text-xl text-[#277a59] flex items-center">
          {title} <img src={LaughEmoji} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
          <FiChevronRight className="ml-1 transform transition-transform duration-300 group-hover:rotate-90" />
        </div>
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mt-2">
          <ul className="text-gray-700">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="block px-4 py-2 hover:bg-gray-100 text-[#277a59] font-bold text-xl">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/eesheesingh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost text-[#277a59] text-[3rem] btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12c0 4.418 2.865 8.167 6.839 9.504.5.092.682-.217.682-.484 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.907-.62.069-.607.069-.607 1.002.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.349-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.653 0 0 .84-.269 2.75 1.025a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.115 2.5.336 1.91-1.294 2.75-1.025 2.75-1.025.546 1.381.203 2.4.1 2.653.64.698 1.029 1.591 1.029 2.682 0 3.842-2.338 4.687-4.566 4.936.36.31.681.923.681 1.86 0 1.344-.013 2.427-.013 2.754 0 .27.18.58.688.482A10.015 10.015 0 0 0 22 12c0-5.516-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
