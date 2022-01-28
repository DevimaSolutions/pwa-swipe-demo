import { Paper } from '@mui/material';

import { combineSx } from '@/utils';

import styles from './styles';

import type { PaperProps } from '@mui/material';

const Card = ({ sx, ...props }: PaperProps) => {
  return <Paper sx={combineSx(sx, styles.container)} {...props} />;
};

export default Card;
