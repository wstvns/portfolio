'use client';

import { useEffect, useState } from 'react';

export const GlowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.05), transparent 80%)`,
      }}
    />
  );
};

export default GlowCursor; 