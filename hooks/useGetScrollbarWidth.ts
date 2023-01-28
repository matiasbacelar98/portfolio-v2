import { useEffect } from 'react';
import useScrollbarSize from 'react-scrollbar-size';

export const useGetScrollbarWidth = () => {
  const { width } = useScrollbarSize();

  // set css variable with browser scrollbar width
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      `calc(${width}px - (100vw - 100%))`
    );
  }, [width]);
};
