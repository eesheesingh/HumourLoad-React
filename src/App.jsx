// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Emojis from './components/Emojis/Emojis.jsx';
import AvatarIcon from './components/AVatarIcon/AvatarIcon.jsx';
import ShowAll from './components/ShowAll/ShowAll.jsx';
import Quote from './components/Home/Quote.jsx';
import DarkH from './components/Home/DarkH.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js'; // Import ScrollToTop
import Contact from './components/ContactPage/Contact.jsx';
import About from './components/About/About.jsx';

const App = () => {
  const location = useLocation();

  const isShowAllPage = location.pathname === '/show-all';
  const titleMap = {
    '/': 'Humour Load',
    '/quotes-load': 'Quotes Load',
    '/dark-humour-load': 'DarkHum Load',
  };
  const title = titleMap[location.pathname] || 'Humour Load';

  return (
    <div className="min-h-screen bg-[#EBE6E0] relative pt-[3rem]">
      {!isShowAllPage && <Navbar title={title} />}
      {location.pathname === '/' && <Emojis />}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-all" element={<ShowAll />} />
          <Route path="/quotes-load" element={<Quote />} />
          <Route path="/dark-humour-load" element={<DarkH />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <AvatarIcon />
      </div>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <ScrollToTop /> {/* Add ScrollToTop here to ensure it affects all routes */}
    <App />
  </Router>
);

export default AppWrapper;
