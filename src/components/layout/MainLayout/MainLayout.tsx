import { Box } from '@mui/material';

import styles from './styles';

import type { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box sx={styles.container}>
      <main>{children}</main>
    </Box>
  );
};

export default MainLayout;
