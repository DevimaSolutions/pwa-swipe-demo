import { CacheProvider } from '@emotion/react';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { Layout } from '@/components';
import { theme, createEmotionCache } from '@/constants';

import type { MyAppProps } from '@/types';

function getGlobalStyles() {
  return {
    '.page-enter': {
      opacity: 0,
      transform: 'scale(1.1)',
    },
    '.page-enter-active': {
      opacity: 1,
      transform: 'scale(1)',
      transition: 'opacity 300ms, transform 300ms',
    },
    '.page-exit': {
      opacity: 1,
      transform: 'scale(1)',
    },
    '.page-exit-active': {
      opacity: 0,
      transform: 'scale(0.9)',
      transition: 'opacity 300ms, transform 300ms',
    },
  };
}

function MyApp({ Component, pageProps, emotionCache }: MyAppProps) {
  const styleCache = useMemo(() => emotionCache || createEmotionCache(), [emotionCache]);
  const router = useRouter();

  return (
    <CacheProvider value={styleCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={getGlobalStyles} />
        <Layout>
          <SwitchTransition mode="out-in">
            <CSSTransition key={router.pathname} classNames="page" timeout={300}>
              <Component {...pageProps} />
            </CSSTransition>
          </SwitchTransition>
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
