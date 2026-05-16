import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    
    // Fallback for some browsers where rendering might delay layout
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
    }, 10);
    
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
