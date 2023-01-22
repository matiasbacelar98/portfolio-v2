import { useState } from 'react';

export const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState('');

  const updateActiveLink = (val: string): void => setActiveLink(val);

  return [activeLink, updateActiveLink];
};
