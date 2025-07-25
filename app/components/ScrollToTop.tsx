'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 2500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full border-2 border-transparent
        bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20
        text-primary hover:scale-105 transition-all duration-500 ease-in-out
        shadow-[0_0_10px_rgba(168,85,247,0.4)]
        backdrop-blur-md hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Subir ao topo"
    >
      <ArrowUp className="w-5 h-5 animate-glow" />
    </button>
  );
};

export default ScrollToTop;
