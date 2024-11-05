import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const BackgroundWrapper = ({ children }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at center, #0c0c0c 0%, #000000 100%)',
      zIndex: -1,
    }}
  >
    {children}
  </div>
);

const Star = ({ x, y, size, distance }) => {
  const opacity = useTransform(useMotionValue(distance), [1, 10], [1, 0.2]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: `${y}vh`,
        left: `${x}vw`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        opacity,
      }}
      animate={{
        scale: [size, size * 2, size],
        opacity: [1, 0.2, 1],
      }}
      transition={{
        duration: Math.random() * 2 + 1,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

const BackgroundEffect = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const distance = Math.random() * 10 + 1;
      newStars.push(
        <Star key={i} x={x} y={y} size={size} distance={distance} />
      );
    }
    setStars(newStars);
  }, []);

  return <BackgroundWrapper>{stars}</BackgroundWrapper>;
};

export default BackgroundEffect;