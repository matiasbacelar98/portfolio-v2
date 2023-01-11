import { AppProps } from 'next/app';
import AppStyles from 'styles/AppStyles';
import { ThemeProvider } from '@/contexts/theme-context';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <AppStyles>
        <Component {...pageProps} />
      </AppStyles>
    </ThemeProvider>
  );
};

export default App;
