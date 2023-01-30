import { useState, useEffect } from 'react';

const initial = {
  opacity: 0,
  y: 50,
};

const onScroll = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.3,
    type: 'tween',
  },
};

export const useSectionAnim = () => {
  const [viewport, setViewport] = useState({ once: true, amount: 0 });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    setViewport(prev => ({
      ...prev,
      amount: isMobile ? 0.1 : 0.4,
    }));
  }, []);

  return { initial, onScroll, viewport };
};
