// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the path changes
  }, [pathname]);

  return null;
};

export default ScrollToTop;
