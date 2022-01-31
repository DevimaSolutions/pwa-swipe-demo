import { Box, Paper } from '@mui/material';
import { EffectCards } from 'swiper';

import Slider from '@/components/Slider';
import { combineSx } from '@/utils';

import styles from './styles';

import type { CardProps } from './types';
import type Swiper from 'swiper';

const Card = ({ sx, onRemove, onOpenDetails, ...props }: CardProps) => {
  return (
    <Box className="swiper-slide">
      <Slider
        sx={{ maxWidth: '100vw', width: '100vw' }}
        modules={[EffectCards]}
        initialSlide={1}
        effect="cards"
        cardsEffect={{
          slideShadows: false,
        }}
        grabCursor
        on={{
          slideChange: (swiper: Swiper) => {
            if (swiper.progress > 0.6) {
              onOpenDetails(swiper);
            } else if (swiper.progress < 0.4) {
              swiper.disable();
              const slideElement = swiper.$el?.[0]?.parentElement?.parentElement;
              if (slideElement) {
                slideElement.style.height = '0px';
                slideElement.style.opacity = '0';
                slideElement.style.transform = 'translateY(50vh)';
              }

              setTimeout(onRemove, 500, swiper);
            }
          },
        }}
        slides={[
          <Box key={0} className="swiper-slide">
            <div />
          </Box>,
          <Box key={1} className="swiper-slide">
            <Paper sx={combineSx(sx, styles.container)} {...props} />
          </Box>,
          <Box key={2} className="swiper-slide">
            <div />
          </Box>,
        ]}
      />
    </Box>
  );
};

export default Card;
