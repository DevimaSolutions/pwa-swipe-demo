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

const transitionTime = 300;

function getGlobalStyles() {
  return {
    '#__next': {
      background: '#eee',
      position: 'relative',
      overflow: 'hidden',
      width: '100vw',
      height: '100vh',
    },
    '.page-enter': {
      zIndex: 1,
      transform: 'translateX(100vw)',
    },
    '.page-enter-active': {
      zIndex: 1,
      transform: 'translateX(0)',
      transition: `transform ${transitionTime}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
    '.page-exit': {
      opacity: 1,
      transform: 'scale(1)',
    },
    '.page-exit-active': {
      opacity: 0,
      transform: 'scale(0.95)',
      transition: `opacity ${transitionTime}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${transitionTime}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    },
  } as const;
}

function MyApp({ Component, pageProps, emotionCache }: MyAppProps) {
  const styleCache = useMemo(() => emotionCache || createEmotionCache(), [emotionCache]);
  const router = useRouter();

  return (
    <CacheProvider value={styleCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={getGlobalStyles} />
        <SwitchTransition mode="in-out">
          <CSSTransition
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            key={router.pathname}
            classNames="page"
            timeout={transitionTime}
            unmountOnExit
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CSSTransition>
        </SwitchTransition>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
