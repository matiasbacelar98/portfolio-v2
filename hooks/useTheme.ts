import { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme-context';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;

  return { theme, toggleTheme };
};
