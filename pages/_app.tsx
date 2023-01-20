import { AppProps } from 'next/app';

import Cursor from '@/components/Cursor';
import { AppStyles } from '@/styles';

import { ThemeProvider } from '@/contexts/theme-context';
import { CursorProvider } from '@/contexts/cursor-context';
import { DistancesProvider } from '@/contexts/distances-context';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <AppStyles>
        <CursorProvider>
          <DistancesProvider>
            <Cursor />
            <Component {...pageProps} />
          </DistancesProvider>
        </CursorProvider>
      </AppStyles>
    </ThemeProvider>
  );
};

export default App;
