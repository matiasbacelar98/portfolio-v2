import { AppProps } from 'next/app';

import { AppStyles } from '@/styles';

import { ThemeProvider } from '@/contexts/theme-context';
import { DistancesProvider } from '@/contexts/distances-context';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <AppStyles>
        <DistancesProvider>
          <Component {...pageProps} />
        </DistancesProvider>
      </AppStyles>
    </ThemeProvider>
  );
};

export default App;
