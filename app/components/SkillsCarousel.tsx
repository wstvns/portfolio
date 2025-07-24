'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const skills = [
  { name: 'TypeScript', icon: '⌨️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Python', icon: '🐍' },
  { name: 'Go', icon: '🔵' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'Flask', icon: '🌶️' },
  { name: 'Django', icon: '🎯' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '⎈' },
];

export const SkillsCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentX, setCurrentX] = useState(0);
  const lastTimeRef = useRef<number>(0);
  const progressRef = useRef<number>(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }

      const deltaTime = timestamp - lastTimeRef.current;
      
      if (!isHovered && containerRef.current) {
        const maxScroll = containerRef.current.scrollWidth / 3;
        progressRef.current = (progressRef.current + deltaTime * 0.03) % maxScroll;
        setCurrentX(-progressRef.current);
      }

      lastTimeRef.current = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    lastTimeRef.current = 0;
    if (containerRef.current) {
      const currentProgress = -currentX;
      progressRef.current = currentProgress;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
      <div
        className="w-full overflow-hidden py-12 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={containerRef}
          className="flex gap-8 whitespace-nowrap"
          style={{
            transform: `translateX(${currentX}px)`,
            transition: isHovered ? 'transform 0.2s ease-out' : 'none',
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="inline-flex flex-col items-center justify-center px-6 py-4 rounded-lg bg-primary-400/5 border border-primary-400/10 min-w-[120px]"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
              }}
            >
              <span className="text-4xl mb-3">{skill.icon}</span>
              <span className="text-sm font-medium text-muted whitespace-nowrap">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 