import type { ReactNode } from 'react';
import type { Layout } from '@/components/types';

export interface ILayoutProps {
  children: ReactNode;
  layoutType?: Layout;
}
