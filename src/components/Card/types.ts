import type { PaperProps } from '@mui/material';
import type Swiper from 'swiper';

export interface CardProps extends PaperProps {
  onRemove: (swiper: Swiper) => void;
  onOpenDetails: (swiper: Swiper) => void;
}
