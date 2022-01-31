import type { PaperProps } from '@mui/material';

export interface CardProps extends PaperProps {
  onRemove: () => void;
  onOpenDetails: () => void;
}
