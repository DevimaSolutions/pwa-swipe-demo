import type { EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';

export interface AppAdditionalProps {
  emotionCache?: EmotionCache;
}

export type MyAppProps = AppProps & AppAdditionalProps;
