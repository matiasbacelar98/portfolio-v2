import { createContext, useState, useEffect, PropsWithChildren } from 'react';

// Context
type ThemeContextValue = {
  theme: string;
  toggleTheme(): void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: '',
  toggleTheme() {},
});

// Export provider
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState('');

  //------- Side effects -------//
  // Get theme from LS
  useEffect(() => {
    // If theme doesn't exist initialize as 'dark'
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', JSON.stringify('dark'));
      setTheme('dark');
      return;
    }

    // Save theme in state
    const value = JSON.parse(localStorage.getItem('theme') || 'dark');
    setTheme(value);
  }, []);

  //------- Utils -------//
  const toggleTheme = () => {
    const value = theme === 'dark' ? 'light' : 'dark';

    // Save in LS
    localStorage.setItem('theme', JSON.stringify(value));

    // Update
    setTheme(value);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
