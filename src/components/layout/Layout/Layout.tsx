import dynamic from 'next/dynamic';

import { Layout as LayoutTypes } from '@/components/types';

import type { ILayoutProps } from './types';

const MainLayout = dynamic(() => import('@/components/layout/MainLayout'));

const layoutMap = {
  [LayoutTypes.Main]: MainLayout,
};

const Layout = ({ children, layoutType = LayoutTypes.Main }: ILayoutProps) => {
  const LayoutComponent = layoutMap[layoutType];
  return <LayoutComponent>{children}</LayoutComponent>;
};

export default Layout;
