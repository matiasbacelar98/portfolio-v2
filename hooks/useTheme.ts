import { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme-context';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  // If the component is outside of the tree
  if (themeContext === undefined) {
    throw Error(
      'The component must be inside of the ThemeProvider, ' +
        'otherwise it will not function correctly.'
    );
  }

  const { theme, toggleTheme } = themeContext;

  return { theme, toggleTheme };
};
