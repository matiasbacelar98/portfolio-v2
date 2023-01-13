import { PropsWithChildren } from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import reset from './reset';
import hkGroteskFont from './fonts';
import variables from './variables';
import { lightTheme, darkTheme } from './theme';

import { useTheme } from '@/hooks';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${variables};
  ${hkGroteskFont}; 
`;

export const AppStyles = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
