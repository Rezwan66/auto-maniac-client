import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            padding: '10px 15px',
            fontSize: '16px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: '1000',
          }}
        >
          ↑ Top
        </button>
      )}
    </>
  );
};
export default ScrollToTopButton;
